import React, { useEffect, useState, useContext } from 'react'
import { Grid, Drawer, makeStyles, ClickAwayListener, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import UIContext from '../context/UIContext'
import clsx from 'clsx'

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
    select: {
        width: '100%'
    },
    filtersForm: {
        width: '100%',
        margin: 0,
    },
    formControl: {
        width: '100%',
        margin: theme.spacing(2)
    },
    margins: {
        margin: theme.spacing(2)
    }
}))

const Books = () => {

    const uiCtx = useContext(UIContext)
    const classes = useStyle()

    const clickAwayHandler = () => {
        if(uiCtx.drawer === true) uiCtx.toggleDrawer(false)
    }

    return (
        <Grid container>
            <ClickAwayListener
                onClickAway={clickAwayHandler}
                mouseEvent="onMouseDown"
                touchEvent="onTouchStart">
                <Drawer 
                    anchor="top" 
                    open={uiCtx.drawer}
                    variant="persistent"
                    >
                    <div className={classes.filters}>
                        <Grid container xs={10} direction="row" className={classes.filtersForm}>
                            <Grid item xs={12} md={3} className={classes.margins}>
                                <FormControl className={clsx([classes.formControl, classes.margins])}>
                                    <InputLabel htmlFor="title-select">Book title</InputLabel>
                                    <Select
                                        labelId="title-select"
                                        id="title-select"
                                        value="Titolo"
                                        fullWidth
                                        >
                                    <MenuItem value="Titolo">Titolo</MenuItem>
                                    <MenuItem value="Titolo 2">Titolo 2</MenuItem>
                                    <MenuItem value="Titolo 3">Titolo 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={3} className={classes.margins}>
                                <FormControl className={clsx([classes.formControl, classes.margins])}>
                                    <InputLabel htmlFor="author-select">Author</InputLabel>
                                    <Select
                                        labelId="author-select"
                                        id="author-select"
                                        value="Authore"
                                        fullWidth
                                        >
                                    <MenuItem value="Titolo">Titolo</MenuItem>
                                    <MenuItem value="Titolo 2">Titolo 2</MenuItem>
                                    <MenuItem value="Titolo 3">Titolo 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </div>
                </Drawer>
            </ClickAwayListener>

            <div>{JSON.stringify(uiCtx)}</div>
        </Grid>
    )
}

export default Books