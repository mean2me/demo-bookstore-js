import React, { useEffect, useState, useContext } from 'react'
import { Grid, Drawer, makeStyles, ClickAwayListener, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import UIContext from '../context/UIContext'
import FiltersForm from './FiltersForm'
import { useSelector } from 'react-redux'

const useStyle = makeStyles(theme => ({
    filters: {
        paddingTop: theme.spacing(12),
        maxHeight: '45vh',
        height: 'auto',
        backgroundColor: theme.palette.secondary[200],
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
}))

const Books = () => {

    const uiCtx = useContext(UIContext)
    const classes = useStyle()
    const author = useSelector(state => state.bookstore?.author)

    const clickAwayHandler = () => {
        if(uiCtx.drawer === true) uiCtx.closeDrawer()
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <ClickAwayListener
                    mouseEvent="onMouseDown"
                    touchEvent="onTouchStart"
                    onClickAway={clickAwayHandler}>
                    <Drawer 
                        anchor="top" 
                        open={uiCtx.drawer || !!author}
                        variant="persistent"
                        >
                        <div className={classes.filters}>
                            <FiltersForm />
                        </div>
                    </Drawer>
                </ClickAwayListener>
            </Grid>
        </Grid>
    )
}

export default Books