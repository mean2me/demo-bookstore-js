import React, { Fragment, useEffect } from 'react'
import { Grid, makeStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthors, getBooksByAuthor } from '../lib/redux/actions/bookstore.actions'
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
        margin: theme.spacing(2)
    },
    margins: {
        margin: theme.spacing(2)
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

    useEffect(() => {
        dispatch(getAuthors())
    },[])

    return (
        <Grid container direction="row" className={classes.filtersForm}>
            <Grid item xs={12} md={3} className={classes.margins}>
                <FormControl className={clsx([classes.formControl, classes.margins])}>
                    <InputLabel htmlFor="author-select">Author</InputLabel>
                    <Select
                        labelId="author-select"
                        id="author-select"
                        fullWidth
                        defaultValue=""
                        onChange={handleSelection}
                        >
                        <MenuItem key={uuidV4()} value="">
                            <em>None</em>
                        </MenuItem>
                        {authors && authors.map(author => (<MenuItem key={uuidV4()} value={author}>{author}</MenuItem>))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default FiltersForm