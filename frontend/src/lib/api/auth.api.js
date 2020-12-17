import { jsonCall } from './gateway'

export const login = async (username, password) =>
    await jsonCall(`/auth/signin`, 'POST', {
        username,
        password,
    })

export const logout = async (username, password) =>
    await jsonCall(`/auth/signout`, 'POST')
