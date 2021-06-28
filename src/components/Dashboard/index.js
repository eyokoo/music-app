import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    margin: '0 auto',
    marginTop: theme.spacing(5),
    width: '960px',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
  },
  card: {
    width: '300px'
  },
  cardTitle: {
    marginBottom: theme.spacing(2)
  },
  FormControl: {
    minWidth: 120,
  }
})


class Dashboard extends Component {

  state = {
    //creating the default for the states
    online: true,
    volume: 20,
    quality: 2, //normal
    notifications: [
      {
        display: false, //if the online key/property is false, display the text
        text: 'Your application is offline. You won\'t be able to share or stream music to other devices.'
      },
      {
        display: false, //if the volume key/property meets the condition stated in the onVolumeChange method, display the text
        text: 'Listening to music at a high volume could cause long-term hearing loss.'
      },
      {
        display: false, //if the quality is set to 1, which is low, then display text
        text: 'Music quality is degraded. Increase quality if your connection allows it.'
      }
    ]
  }

  onOnlineChange = (online) => {
    const { notifications } = this.state;
    notifications[0].display = !online;

    this.setState({ //NEED TO UNDERSTAND THE PURPOSE OF SETSTATE AND WHAT ITS DOING
      online,
      notifications
    });
  }

  onVolumeChange = (volume) => {
    const { notifications } = this.state;
    notifications[1].display = volume > 80;

    this.setState({
      volume,
      notifications
    });

  }

  onQualityChange = (quality) => {
    const { notifications } = this.state;
    notifications[2].display = quality === 1; //low

    this.setState({
      quality,
      notifications
    });
  }
  // == in JavaScript is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing two variables, but this operator also checks datatype and compares two values.


  render() {
    const { classes } = this.props; //REVIEW THIS!
    const { online, volume, quality, notifications} = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="h2"> Welcome User! </Typography>

        <div className={classes.cardContainer}>

          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" className={classes.cardTitle}> Online Mode </Typography>
              <Typography variant="body1"> Is this application connected to the internet? </Typography>
            </CardContent>
            <CardActions>
              <Switch
                checked={online} //set to true in the state
                onChange={(event) => this.onOnlineChange(event.target.checked)} />
            </CardActions>
          </Card>


          <Card className="card-container">
            <CardContent>
              <Typography variant="h5"> Master Volume </Typography>
              <Typography variant="body1"> Overrides all other sound settings in this application. </Typography>
            </CardContent>
            <CardActions>
              <Slider value={volume} // set to 20 in the state 
                onChange={(_, value) => this.onVolumeChange(value)}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100} />
            </CardActions>
          </Card>


          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" className={classes.cardTitle}> Sound Quality </Typography>
              <Typography variant="body1"> Manually control the music quality in event of poor connection. </Typography>
            </CardContent>
            <CardActions>

              <FormControl variant="filled" >
                <InputLabel className='inputLabel'>Quality</InputLabel>
                <Select
                  value={quality}
                  onChange={(event => this.onQualityChange(event.target.value))}> {/* target Event Property:  alert(event.target) --> returns the element that triggered the event. In this case, the targetted event is the onQualityChange, also defined as the alert, and the element is value, which is defined below in the MenuItem Components */}

                  <MenuItem value={1}>Low</MenuItem>  {/* when a MenuItem is selected, it will trigger the onChange event for the onQualityChange and pass in the value as the argument. Then the onQualityChange method will run the condition and if the condition is met then it will display notification index 2 */}
                  <MenuItem value={2}>Normal</MenuItem>
                  <MenuItem value={3}>High</MenuItem>
                </Select>
              </FormControl>
            </CardActions>
          </Card>
        </div>
        <div>
          <Typography variant="h3">System Notifications:</Typography>
          {
            notifications.map((notification, index) => {  //the argument notification is the current value after the notifications array was mapped. the map method is run, and if the notification.display is false it will return the notification.text
              if (notification.display) { 
                return (
                  <p key={index}>  {/* Would like to know how this can be done without using index as a key */}
                    {notification.text}
                  </p>
                );
              }
              return null;
            })
          }
        </div>
      </div>
    )
  }
}


export default withStyles(styles)(Dashboard);
