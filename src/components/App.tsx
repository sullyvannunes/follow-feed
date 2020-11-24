import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Content from "./Content";
import Feeds from "./Feeds";
import Sidebar from "./Sidebar";
import SignIn from "./SignIn";
import Welcome from './Welcome';
import ProtectedRoute from "./ProtectedRoute";

import { UserContext } from '../models/User';
import { getUserFromLocalStorageOrNull } from '../utils/Session';

import '../styles/App.css';

function App() {
  const [user, setUser] = useState(getUserFromLocalStorageOrNull());

  return(
    <Router>
      <UserContext.Provider value={ { user: user, setUser: setUser } }>
        <div className="App">
          <Switch>
            <ProtectedRoute path='/home'>
              <Sidebar />
              <Content>
                You're in Home
              </Content>
            </ProtectedRoute>
            <ProtectedRoute path='/Feeds'>
              <Sidebar />
              <Content>
                <Feeds/>
              </Content>
            </ProtectedRoute>

            <Route exact path='/'>
              <Welcome />
            </Route>

            <Route path="/sign_in">
              <SignIn/>
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  )
}

export default App;
