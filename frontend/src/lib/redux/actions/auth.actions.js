import actionKeys from './keys'

const keys = actionKeys()

/**
 * 
 * @param {string} username 
 * @param {string} password 
 */
export const login = (username, password) => ({
    type: keys.AUTH_LOGIN,
    payload: {
        username,
        password
    }
})

export const logout = () => ({
    type: keys.AUTH_LOGOUT
})