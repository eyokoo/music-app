import './App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function App() {

  const onActionClicked = () => {
    console.log('Button action clicked');
  }

  return (
    <div className="App">

      <Card className="card-container">
        <CardContent>
          Here is where the content of the card goes
    </CardContent>
        <CardActions>
          <Button size="small" onClick={onActionClicked}> Action </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
