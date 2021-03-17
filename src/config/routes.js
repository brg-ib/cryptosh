import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import PrivateRoute from '../utils/privateRoute'

import App from '../screens/app'
import Login from '../screens/login'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={App}></Route>
          <PrivateRoute path='/login' component={Login}></PrivateRoute>
          <Redirect to='/' />
        </Switch>
      </Router>
    )
  }
}
