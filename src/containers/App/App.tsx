import React, { useState } from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, Button, IconButton}  from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Login } from '../../components/Login/Login'

import { useStyles } from '../../styles'

export default function App() {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(false)

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Showoff Widgets
          </Typography>
          <Button color="inherit" onClick={(e) => {setOpenLogin(true)}}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    <Login open={openLogin} onClose={() => {setOpenLogin(false)}}></Login>
    <h1>Widgets!</h1>
    </>
  );
}
