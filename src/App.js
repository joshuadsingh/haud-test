import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Navbar from './components/layout/navbar'
import Dashboard from './components/dashboard/dashboard'
import UserDetails from './components/users/userDetails'
import EditUser from './components/users/editUser'
import CreateUser from './components/users/createUser'
import store from './store/store'
import fbConfig from "./config/fbConfig";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebase from "firebase/app";
import './assets/style/main.scss';

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
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
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
