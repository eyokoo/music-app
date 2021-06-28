import { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles'


const styles = theme => ({
    loginContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: '28px auto 0',
        width: '300px'
    },
    textField: {
        marginBottom: theme.spacing(2)
    }
});

class Login extends Component {
  render() {
     const { onLogin, classes } = this.props;
      return (
          <div className={classes.loginContainer}>
              <TextField className={classes.textField} label="Username" variant="outlined" />
              <TextField className={classes.textField} label="Password" variant="outlined" />
              <Button variant="contained" color="primary"
                  onClick={() => onLogin(true)}>
                  Login
              </Button>
          </div>
      );
  }
}

export default withStyles(styles)(Login)