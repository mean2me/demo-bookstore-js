import React, { useContext, useEffect, useState } from 'react';
import UIContext from '../context/UIContext'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FilterList from '@material-ui/icons/FilterList'
import ExitToApp from '@material-ui/icons/ExitToApp'
import { useDispatch } from 'react-redux'
import { logout } from '../lib/redux/actions/auth.actions'
import { searchBooks, resetAuthorFilter } from '../lib/redux/actions/bookstore.actions'
import { sayHello } from 'demo-bookstore-lib'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const uiCtx = useContext(UIContext)
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const handleLogoutClick = () => {
    dispatch(logout())
  }
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleResetSearch = (e) => {
    dispatch(resetAuthorFilter())
  }

  useEffect(() => {

    let tid
    if(search && search.length >= 3) {
      tid = setTimeout(() => {
        dispatch(searchBooks(search))
      }, 500)
    } else {
      tid = setTimeout(() => {
        dispatch(searchBooks(''))
      }, 500)
    }
    
    return () => {
      sayHello()
      clearInterval(tid)
    }
  }, [search]);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed" xs={12}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => uiCtx.toggleDrawer()}
          >
            <FilterList />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Demo Book Store
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchChange}
              onKeyDown={handleResetSearch}
            />
          </div>
          <IconButton
            onClick={() => handleLogoutClick()}
            color="inherit"
            aria-label="Logout"
          >
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
