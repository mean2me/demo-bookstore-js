import React, { useEffect, useState, useContext, Fragment } from 'react'
import { 
    Avatar, 
    Grid, 
    Drawer, 
    makeStyles, 
    ClickAwayListener, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, List, ListItem, ListItemText, ListItemIcon, Divider, Typography } from '@material-ui/core'
import UIContext from '../context/UIContext'
import FiltersForm from './FiltersForm'
import { useSelector } from 'react-redux'
import Paginator from './Paginator'
import { v4 as uuidV4 } from 'uuid'
import BookIcon from '@material-ui/icons/BookOutlined'

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
    view: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 'auto',
    },
    listRoot: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
    },
    listInline: {
            display: 'inline',
    },
    listItem: {
        width: '100%'
    }
}))

const BooksList = () => {

    const classes = useStyle()

    const { page } = useContext(UIContext)
    const books = useSelector(state => state?.bookstore?.books)
    const [pageData, setPageData] = useState([])
    
    useEffect(() => {
        const data = books.slice(page * 12, (page * 12) + 12)
        setPageData(data)
    }, [page, books])

    return (
        <div className={classes.listRoot}>
            <Paginator />
            <List className={classes.listRoot}>
            {pageData && pageData.map((book) => {

                return (
                    <Fragment key={uuidV4()}>
                        <ListItem key={uuidV4()} alignItems="flex-start" button className={classes.listItem}>
                            <ListItemIcon>
                                <BookIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography
                                    component="span"
                                    variant="body1"
                                    className={classes.listInline}
                                    color="textPrimary"
                                    aria-label="Book title"
                                >
                                    {book.title}
                                </Typography>}
                                secondary={
                                <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body1"
                                    className={classes.listInline}
                                    color="textPrimary"
                                    aria-label="Book author"
                                >
                                    <strong>author:</strong> {book.author}
                                </Typography>
                                <br/>
                                <Typography
                                    component="p"
                                    variant="caption"
                                    className={classes.listInline}
                                    color="textPrimary"
                                >
                                    {`${book.quantity > 0 ? 'We still have' : 'We don\'t have this book '} ${book.quantity > 0 ? book.quantity : ''} available${book.quantity > 1 ? 's' : ''}`}
                                </Typography>
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </Fragment>
                )
            })}
            </List>
            <Paginator />
        </div>
    )
}

const Books = () => {

    const uiCtx = useContext(UIContext)
    const classes = useStyle()
    const author = useSelector(state => state.bookstore?.author)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const clickAwayHandler = () => {
        if(uiCtx.drawer === true) uiCtx.closeDrawer()
    }

    return (
        <Grid container>
            {isAuthenticated && <Grid item xs={12} className={classes.view}>
                <ClickAwayListener
                    mouseEvent="onMouseDown"
                    touchEvent="onTouchStart"
                    onClickAway={clickAwayHandler}>
                    <Drawer 
                        anchor="top" 
                        open={uiCtx.drawer}
                        variant="persistent"
                        >
                        <div className={classes.filters}>
                            <FiltersForm />
                        </div>
                    </Drawer>
                </ClickAwayListener>

                <Divider />
                <BooksList />
            </Grid>}
        </Grid>
    )
}

export default Books