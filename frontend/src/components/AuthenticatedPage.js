import React from 'react'
import { Container, CssBaseline, Grid, makeStyles } from "@material-ui/core"
import SearchAppBar from './SearchAppBar'
import SignIn from './SignIn'
import Books from './Books'

const useStyle = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        height: '100vh',
        backgroundColor:theme.palette.background.paper,
    }
}))

export default ({ children, ...props}) => {

    const classes = useStyle()

    return (
        <div className={classes.root}>
        <CssBaseline />
        <Container>
            <SearchAppBar />
            <SignIn />
            <Grid container>
                <Books />
            </Grid>
        </Container>
        </div>
    )
}