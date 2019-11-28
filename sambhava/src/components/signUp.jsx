import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { blue, red } from '@material-ui/core/colors';
import LockOutlinedIcon from '@material-ui/icons/HowToReg';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

const UseStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    alignContent: 'center',
    margin: theme.spacing(1),
    backgroundColor: blue[900],
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    maxWidth: 345,
  },
}));

export default function signUp() {
  const classes = UseStyles();

  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh',background: 'url(https://client.truckola.in/tkl_background.c67dc5771d431697720d.png)' }}
  >
  
    <Card item  style = {{ background: '', padding: '20px', maxWidth: '400px', marginBottom: '10vh'}}>
    <div className={classes.paper}>  
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
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
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password_2"
            label="Retype Password"
            type="password"
            id="password_2"
            autoComplete="current-password"
          />       
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
          <CardActions>    
              <NavLink to="/" text-decoration="none" >
                <Button  size="medium" color="primary" style= { {marginLeft: "250px"}} >
                Log In
                </Button>
            </NavLink>
          </CardActions>
        </form>
      </div>
    </Card>   
  </Grid> 
    
  );
}












