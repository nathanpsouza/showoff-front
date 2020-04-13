import React from 'react';
import { useForm } from 'react-hook-form'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import Typography from '@material-ui/core/Typography';

interface SignUpProps {
  classes: any
  onSignUp: any
  changeCurrentForm: any
}

export function SignUp(props: SignUpProps) {

  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    props.onSignUp(data)
  }

  const openSignInForm = () => {
    props.changeCurrentForm('signin')
  }

  return (
    <div className={props.classes.paper}>
      <Avatar className={props.classes.avatar}>
        <VerifiedUserOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={props.classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          error={errors.email !== undefined}
          helperText={errors.email && errors.email.message}
          inputRef={register({ required: 'You should provide email', pattern: {value: /\S+@\S+\.\S+/, message: 'Invalid email format'} })}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="first_name"
          label="First Name"
          name="first_name"
          autoComplete="first-name"
          error={errors.first_name !== undefined}
          helperText={errors.first_name && errors.first_name.message}
          inputRef={register({ required: 'You should provide first name'})}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="last_name"
          label="Last Name"
          name="last_name"
          autoComplete="last-name"
          error={errors.last_name !== undefined}
          helperText={errors.last_name && errors.last_name.message}
          inputRef={register({ required: 'You should provide last name'})}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          error={errors.password !== undefined}
          helperText={errors.password && errors.password.message}
          inputRef={register({ required: 'You should provide password', minLength: { value: 8, message: 'Password must have at least 8 characters'}})}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password_confirmation"
          label="Password Confirmation"
          type="password"
          id="password_confirmation"
          autoComplete="current-password-confirmation"
          error={errors.password_confirmation !== undefined}
          helperText={errors.password_confirmation && errors.password_confirmation.message}
          inputRef={register({ required: 'You should provide password confirmation', minLength: { value: 8, message: 'Password must have at least 8 characters'}})}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={props.classes.submit}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" onClick={openSignInForm} variant="body2">
              {"Already have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}