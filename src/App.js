import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nutrition from './components/nutrition/Nutrition';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/nutrition" component={Nutrition} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
