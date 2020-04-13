import React, { useState } from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

import { useStyles } from '../../styles'
import { User } from '../../models/User'

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert'

import axios from 'axios'

interface LoginProps {
  open: boolean,
  onClose: any
}

export function Login(props: LoginProps) {
  const classes = useStyles();

  const [currentForm, setCurrentForm] = useState('login')
  const [flashMessage, setFlashMessage] = useState({severity: '', message: ''})

  const handleSignIn = (user: User) => {
    console.log(user)
  }

  const handleSignUp = (user: User) => {
    axios.post(`${process.env.REACT_APP_API_URL}/users`, {user: user}).then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const flash = (severity: 'error' | 'success', message: string) => {
    setFlashMessage({severity: severity, message: message})
  }

  const changeCurrentForm = (form: 'login' | 'signup') => {
    setCurrentForm(form)
  }

  var componentToUSe = <SignIn 
    classes={classes} 
    onSignIn={(user: User) => handleSignIn(user)}
    changeCurrentForm={(form: 'login' | 'signup') => changeCurrentForm(form)}
    ></SignIn>

  switch(currentForm) {
    case 'signup':
      componentToUSe = <SignUp 
        classes={classes} 
        onSignUp={(user: User) => handleSignUp(user)}
        changeCurrentForm={(form: 'login' | 'signup') => changeCurrentForm(form)}
        ></SignUp>
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            {flashMessage.severity !== '' &&
              <Alert severity={flashMessage.severity} onClose={() => {}}>{flashMessage.message}</Alert>
            }
            {componentToUSe}
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}
