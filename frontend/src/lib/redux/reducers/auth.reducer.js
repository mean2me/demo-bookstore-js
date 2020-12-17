import actionKeys from '../actions/keys'

const keys = actionKeys()

const initialState = {
    isAuthenticated: false,
    authenticatedUser: null,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case keys.AUTH_LOGIN_SUCCESS:
            state.isAuthenticated = true
            state.authenticatedUser = action.payload.data
            state.error = null
            break
        case keys.AUTH_LOGIN_FAILURE:
            state.isAuthenticated = false
            state.authenticatedUser = null
            if (action.payload?.success === false && action.payload?.message) {
                state.error = action.payload.message
            } else {
                state.error = action?.payload?.error?.message
            }
            break
        case keys.AUTH_LOGOUT:
            state = { ...initialState }
            break
        case keys.AUTH_LOGOUT_SUCCESS:
            setTimeout(() => localStorage.removeItem('state'), 1000)
            break
    }

    return { ...state }
}
