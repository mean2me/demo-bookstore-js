import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../lib/redux/actions/auth.actions'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  login: {
      minWidth: '240px',
      minHeight: '360px',
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const isAuthenticated = useSelector(state => state.auth?.isAuthenticated)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      if(isAuthenticated) setOpen(false);
  };

  const handleClick = () => {
    dispatch(login(username, password))
  }

  useEffect(() => {
      setOpen(!isAuthenticated)
  }, [isAuthenticated]);


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Login form title"
        aria-describedby="Login form description"
        className={classes.login}
        fullWidth={true}
        maxWidth="xs"
      >
        <DialogTitle>Please, sign in</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="User name"
                type="text"
                fullWidth
                onChange={e => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="dense"
                fullWidth
                onChange={e => setPassword(e.target.value)}
                />
        </DialogContent>
        <DialogActions>
            <Button variant="contained" color="primary" onClick={handleClick}>
                Sign in
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
