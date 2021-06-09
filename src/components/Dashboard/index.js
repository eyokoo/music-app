import { Component } from 'react';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './style.css'


export default class Dashboard extends Component {

  //need to define value, classes, quality, handleChange
  state = {
    isClicked: false,
    value: ''
  }

  onClickHandler = () => {
    this.state.isClicked ?
      this.setState({ isClicked: false }) :
      this.setState({ isClicked: true })
  }

  handleChange = (event) => {
    console.log('something changed')
  }

  render() {


    return (

      <div className="Card">
        <Card className="card-container">
          <CardContent>
            <Typography variant="h5"> Online Mode </Typography>
            <Typography variant="body2"> Is this application connected to the internet? </Typography>
          </CardContent>
          <Switch onClick={this.onClickHandler} />
        </Card>

        <Card className="card-container">
          <CardContent>
            <Typography variant="h5"> Master Volume </Typography>
            <Typography variant="body2"> Overrides all other sound settings in this application. </Typography>
          </CardContent>
          <Slider value={value} onChange={this.handleChange} defaultValue={20} valueLabelDisplay="auto" step={10} marks min={0} max={100} />
        </Card>

        <Card className="card-container">
          <CardContent>
            <Typography variant="h5"> Sound Quality </Typography>
            <Typography variant="body2"> Manually control the music quality in event of poor connection. </Typography>
          </CardContent>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>Quality</InputLabel>
            <Select value={quality} onChange={handleChange}>
              <MenuItem value={10}>Low</MenuItem>
              <MenuItem value={20}>Normal</MenuItem>
              <MenuItem value={30}>High</MenuItem>
            </Select>
          </FormControl>
        </Card>

      </div>
    )
  }
}