import React from 'react';
import Header from './components/Header.js';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Fav from './components/Fav.js';

class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/fav"><Fav /></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;