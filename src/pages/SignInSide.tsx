import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { makeStyles } from '@material-ui/core/styles';

// Components
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Delivery from '../assets/img/delivery.svg';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },

  image: {
    backgroundColor: '#9AE265',
  },

  img: {
    marginTop: '20%',
  },

  paper: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    margin: 20,
    backgroundColor: '#9AE265',
  },

  form: {
    width: '50%', // Fix IE 11 issue.
    marginTop: 20,
  },

  submit: {
    color: 'white',
    backgroundColor: '#9AE265',
  },
}));

export default function SignIn() {
  const classes = useStyles();

   return (
    <div>
      <Header />

      <Grid container component='main' className={classes.root}>
        <CssBaseline />
        <Grid item xs={8} className={classes.image} >
          <img src={Delivery} className={classes.img} alt='' />
        </Grid>
        <Grid item xs={4} component={Paper} elevation={2} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                // onChange={getEmail}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                // onChange={getPassword}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              
              <Button
                type='submit'
                fullWidth
                variant='contained'
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='#' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}
