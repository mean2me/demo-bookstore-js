import { Route, useLocation, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AuthenticatedPage from './AuthenticatedPage'

const PrivateRoute = ({ children, ...props }) => {
    const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated)
    const { pathname, search } = useLocation()

    return (
        <Route {...props}>
            {isAuthenticated ? (
                <AuthenticatedPage>{children}</AuthenticatedPage>
            ) : (
                <Redirect to={`/login?redirect=${pathname}${search}`} />
            )}
        </Route>
    )
}

export default PrivateRoute
