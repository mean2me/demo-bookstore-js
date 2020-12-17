import React from 'react'
import { Container, CssBaseline, Divider, Grid, makeStyles } from "@material-ui/core"
import SearchAppBar from './SearchAppBar'
import SignIn from './SignIn'
import Books from './Books'

const useStyle = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        minHeight: '100vh',
        width: '100%',
        padding: theme.spacing(8,0),
        backgroundColor:theme.palette.background.paper,
    },
    container: {
        display:'flex',
        height: '100%',
        width: '100%',
        border: '1px solid red',
        paddingTop: '8rem',
    },
    divider: {
        display: 'block',
        position: 'relative',
        margin: theme.spacing(4,0)
    }
}))

export default ({ children, ...props}) => {

    const classes = useStyle()

    return (
        <div className={classes.root}>
        <CssBaseline />
        <Divider className={classes.divider} />
        <SearchAppBar />
        <SignIn />
        <Grid container>
            <Books />
        </Grid>
        </div>
    )
}