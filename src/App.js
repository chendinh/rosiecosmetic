import React, { Component } from 'react';
import './App.css';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import { createBrowserHistory } from "history";


//** Import file */
import indexRoutes from "./routes/index.js";

var hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            console.log('history:',prop);
            return <Route path={prop.path} key={key} component={prop.component} />;
          })}
        </Switch>
      </Router>
    );
  }
}
export default App;


