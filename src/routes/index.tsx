import React from 'react'
import { Routes as SwitchRoute } from 'react-router-dom'

import Route from './Route'

import DefaultLayout from '../layouts/Default'
import Home from '../pages/Home'
import Login from '../pages/Login'

const Routes: React.FC = () => (
  <SwitchRoute>
    <Route path="/*" component={DefaultLayout}>
      <Route path="/" component={Home} />
      <Route path="/login/*" component={Login} />
    </Route>
  </SwitchRoute>
)

export default Routes
