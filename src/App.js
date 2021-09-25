import './App.css';
import { MyContextProvider } from './context/context';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';


import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <MyContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Redirect to='/admin' />
            </Route>

            <PrivateRoute path='/admin' component={Layout} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    </MyContextProvider>
  );
}

export default App;
