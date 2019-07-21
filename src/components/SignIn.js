import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../helpers/'

import {signIn} from '../actions';

const useStyles = makeStyles(theme => ({
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
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  const classes = useStyles();

  const handleSignIn = (vals) => {
    // props.signIn(vals);
    props.signIn({"username": "sangwoo", "password": "rgW&8hT7pp^n"});
  }

  return (
    <div className={classes.paper}>
        <h1>Sign In</h1>
        <form className={classes.form} onSubmit={props.handleSubmit((vals)=>handleSignIn(vals))}>
            <Field name='username' type='text' placeholder='User Name' component={renderInput} />
            <Field name='password' type='password' placeholder='Password' component={renderInput}/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
                Sign In
            </Button>
        </form>
    </div>
  );
}

export default connect(null,{signIn})(
    reduxForm({
    form: 'sign-in'
  })(SignIn)
  );