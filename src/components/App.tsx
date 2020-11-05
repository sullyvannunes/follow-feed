import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Content from "./Content";
import Sidebar from "./Sidebar";
import Feeds from "./Feeds";

import '../styles/App.css';

function App() {
  return(
    <Router>
      <div className="App">
        <Sidebar />
        <Content>

          <Switch>
            <Route exact={true} path='/'>
              <div>
                Welcome
              </div>
            </Route>

            <Route  path='/Feeds'>
              <Feeds/>
            </Route>

          </Switch>

        </Content>
      </div>
    </Router>
  )
}

export default App;
