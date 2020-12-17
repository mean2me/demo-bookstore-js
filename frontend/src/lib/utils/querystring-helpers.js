/**
 * Simple utilities to manipulate querystring
 * @module url-helpers
 * @author Emanuele Colonnelli <emanuele@projavascript.it>
 */

export const parseGetParams = (params) => obj2query(params)

export const obj2query = (params) => {
    const query =
        '?' +
        Object.keys(params)
            .map((k) => `${k}=${encodeURIComponent(params[k])}`)
            .join('&')
    return query
}

export const querystring = (name, url = window.location.href) => {
    name = name.replace(/[[]]/g, '\\$&')
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i')
    const results = regex.exec(url)
    if (!results) {
        return null
    }
    if (!results[2]) {
        return ''
    }
    return decodeURIComponent(results[2].replace(/\+/g, ''))
}
