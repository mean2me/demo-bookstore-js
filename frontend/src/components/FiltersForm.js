import React, { Fragment, useEffect, useMemo } from 'react'
import { Grid, makeStyles, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthors, getBooksByAuthor, resetAuthorFilter, searchBooks } from '../lib/redux/actions/bookstore.actions'
import { v4 as uuidV4 } from 'uuid'

const useStyle = makeStyles(theme => ({
    select: {
        width: '100%'
    },
    filtersForm: {
        width: '100%',
        margin: 0,
    },
    formControl: {
        width: '100%',
    },
    margins: {
        margin: theme.spacing(2)
    },
    resetBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

const FiltersForm = () => {
    
    const dispatch = useDispatch()
    const classes = useStyle()
    const author = useSelector(state => state.bookstore?.author)
    const authors = useSelector(state => state.bookstore?.authors)

    const handleSelection = (e) => {
        dispatch(getBooksByAuthor(e.target.value))
    }

    const handleResetClick = () => {
        dispatch(resetAuthorFilter())
    }

    const authorsSelect = useMemo(() => {
        return (<Select
                        labelId="author-select"
                        id="author-select"
                        name="bookAuthor"
                        fullWidth
                        defaultValue=""
                        onChange={handleSelection}
                        variant="standard"
                        value={author}
                        >
                        <MenuItem key={uuidV4()} value="">
                            <em>None</em>
                        </MenuItem>
                        {authors && authors.map(author => (<MenuItem key={uuidV4()} value={author}>{author}</MenuItem>))}
                    </Select>)
        }, [authors, author])

    useEffect(() => {
        if(!authors) {
            dispatch(getAuthors())
        }
    },[authors])

    useEffect(() => {
        if(!author) {
            dispatch(searchBooks())
        } else {
            dispatch(getBooksByAuthor(author))
        }
    }, [author])

    return (
        <Grid container direction="row" className={classes.filtersForm}>
            <Grid item xs={8} md={3} className={classes.margins}>
                <FormControl className={clsx([classes.formControl, classes.margins])}>
                    <InputLabel htmlFor="author-select">Author</InputLabel>
                    {authorsSelect}
                </FormControl>
            </Grid>
            <Grid item xs={2} className={clsx([classes.margins, classes.resetBtn])}>
                <Button variant="contained" color="primary" onClick={() => handleResetClick()}>
                    clear
                </Button>
            </Grid>
        </Grid>
    )
}

export default FiltersForm