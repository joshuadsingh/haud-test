import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Dashboard from './components/dashboard/dashboard'
import UserDetails from './components/users/userDetails'
import EditUser from './components/users/editUser'
import CreateUser from './components/users/createUser'
import './assets/style/main.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-wrapper">
          <Navbar />
          <Switch>
          <Route path='/create-user' component={ CreateUser } />
            <Route path='/users/*' component={ UserDetails } />
            <Route path='/edit-user/*' component={ EditUser } />
            <Route path='/' component={ Dashboard } />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
