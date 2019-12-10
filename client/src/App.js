import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Authenticate from './components/Authenticate';
import Dashboard from './components/Dashboard';
import NotFound from './components/404';


class App extends Component {


    render() {

      return (
        <BrowserRouter>
            <Switch>
              <Route exact path="/authenticate"><Authenticate/></Route>
              <Route exact path="/dashboard"><Dashboard/></Route>
              <Route exact path="/"><Authenticate/></Route>
              <Route path="/"><NotFound/></Route>
            </Switch>
        </BrowserRouter>
      );
    }
  }
  
  export default App;

  ///register top course then point to a component to define subroutes. 
  