import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, makeStyles, CssBaseline } from '@material-ui/core'
import AuthenticatedPage from '../components/AuthenticatedPage'

export default ({ children, ...props }) => {
    return (
            <Route exact path="/">
                <AuthenticatedPage />
            </Route>
    )
}