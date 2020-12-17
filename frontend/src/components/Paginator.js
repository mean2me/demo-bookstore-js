import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { useSelector } from 'react-redux'
import UIContext from '../context/UIContext'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

export default function Paginator() {
    const classes = useStyles();

    const [pages,setPages] = useState(0)
    const [page,setPage] = useState(0)

    // total available books
    const count = useSelector(state => state.bookstore?.books?.length ?? 0)
    // static rows per page
    const rowsPerPage = 12;

    const uiCtx = useContext(UIContext)


    useEffect(() => {
        setPages(Math.ceil(count / rowsPerPage))
    }, [count]);

    const handleFirstPageButtonClick = () => {
        setPage(0)
        uiCtx.setPage(0)
    }

    const handleBackButtonClick = () => {
        setPage(page - 1)
        uiCtx.setPage(page - 1)
    }

    const handleNextButtonClick = () => {
        setPage(page + 1)
        uiCtx.setPage(page + 1)
    }
    
    const handleLastPageButtonClick = () => {
        setPage(Math.max(0, pages - 1))
        uiCtx.setPage(Math.max(0, pages - 1))
    }

    return (
        <div className={classes.root}>
            <Typography variant="caption">{rowsPerPage} of {count} books</Typography>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                <FirstPageIcon />
            </IconButton>

            <IconButton 
                onClick={handleBackButtonClick} 
                disabled={page === 0} 
                aria-label="previous page">
                <KeyboardArrowLeft />
            </IconButton>
            <Typography variant="caption">Page {page + 1} of {pages}</Typography>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= pages - 1}
                aria-label="next page"
            >
                <KeyboardArrowRight />
            </IconButton>

            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= pages - 1}
                aria-label="last page"
            >
                <LastPageIcon />
            </IconButton>
        </div>
    );
}
