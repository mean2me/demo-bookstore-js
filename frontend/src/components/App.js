import React, { useMemo, useState } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import grey from '@material-ui/core/colors/grey'

import store from '../lib/redux/store'
import UIContext from '../context/UIContext'

import ErrorBoundary from './ErrorBoundary'
import HomePage from './HomePage'

const App = () => {
    const theme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    primary: lightBlue,
                    secondary: grey,
                    white: '#ffffff',
                    black: '#000000',
                },
            }),
        []
    )

    const [uiState, setUIState] = useState({
        drawer: false,
        toggleDrawer: (status) => {
            setUIState(() => ({
                ...uiState,
                drawer: status ?? !uiState.drawer
            }))
        },
        closeDrawer: () => {
            setUIState(() => ({
                ...uiState,
                drawer: false
            }))
        },
        page: 0,
        setPage: (page) => {
            setUIState(() => ({
                ...uiState,
                page: page,
            }))
        }
    })

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ErrorBoundary>
                    <UIContext.Provider value={uiState}>
                        <HomePage />
                    </UIContext.Provider>
                </ErrorBoundary>
            </ThemeProvider>
        </Provider>
    )
}

export default App