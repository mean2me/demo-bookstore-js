/**
 * API Gateway
 * @module gateway
 * @author Emanuele Colonnelli <emanuele@projavascript.it>
 */
import Cookies from 'universal-cookie'

const cookies = new Cookies()

// prettier-ignore
export const API_URL = `${process.env.BASE_URL}${process.env.API_PATH}`

/**
 * @description Helper function to fetch CSRF token before to render the bundled app
 * @param {function} cb 
 */
export const prefetch = (cb) => {
    if (!cookies.get('csrfToken')) {
        fetch(`${API_URL}/csrf`, {
            method: 'GET',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        }).then((resp) => {
            resp.json().then((json) => {
                cookies.set('csrfToken', json.csrfToken, { path: '/' })
                cb()
            })
        })
    } else cb()
}

/**
 * Helper function to perform authenticated API call. Manages csrf token and auth headers
 * @param {string} url 
 * @param {string} method any of POST|PUT|DELETE|GET|PATCH
 * @param {Object} data any payload object, will be converted to query string
 */
export const jsonCall = async (url, method, data) => {
    let csrf
    switch (method) {
        case 'POST':
        case 'DELETE':
        case 'PUT':
            csrf = cookies.get('csrfToken')
            break
        default:
            csrf = null
            break
    }

    const raw = await fetch(url.startsWith('http') ? url : `${API_URL}${url}`, {
        method,
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            ...(csrf ? { 'csrf-token': csrf } : {}),
        },
        credentials: 'include',
        ...(data ? { body: JSON.stringify(data) } : {}),
    })

    const resp = await raw.json()
    if (raw.status === 401) {
        return {
            success: false,
            code: 401,
            error: resp,
        }
    } else return resp
}
