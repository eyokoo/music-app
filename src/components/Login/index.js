import { Component } from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './style.css'

export default class Login extends Component {
  render() {
     const { onLogin } = this.props;
      return (
          <div className="login-container">
              <TextField label="Username" variant="outlined" />
              <TextField label="Password" variant="outlined" />
              <Button variant="contained" color="primary"
                  onClick={() => onLogin(true)}>
                  Login
              </Button>
          </div>
      );
  }
}