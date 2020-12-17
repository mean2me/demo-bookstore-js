import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { querystring } from '../lib/utils/querystring-helpers.js'

const PublicRoute = ({ children, ...props }) => {
    const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated)
    const redirect = querystring('redirect')
    return (
        <Route {...props}>
            {!isAuthenticated ? (
                children
            ) : (
                <Redirect
                    to={redirect === '' || redirect === null ? '/' : redirect}
                />
            )}
        </Route>
    )
}

export default PublicRoute
