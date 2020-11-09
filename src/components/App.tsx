import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Content from "./Content";
import Sidebar from "./Sidebar";
import SignIn from "./SignIn";
import Feeds from "./Feeds";

import '../styles/App.css';

function App() {
  return(
    <Router>
      <div className="App">
        <Switch>
          <Route exact={true} path='/'>
            <Sidebar />
            <Content>
              Welcome
            </Content>
          </Route>

          <Route  path='/Feeds'>
            <Sidebar />
            <Content>
              <Feeds/>
            </Content>
          </Route>

          <Route path="/sign_in">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
