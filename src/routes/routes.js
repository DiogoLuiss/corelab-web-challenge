import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import FilterCars from '../pages/FilterCars'
import Home from '../pages/home'
import NotFound from '../pages/NotFound'
import RegisterCar from '../pages/RegisterCar'
import UpdateCar from '../pages/UpdateCar'

function Routess() {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={RegisterCar} path="/cadastro" />
        <Route exact component={UpdateCar} path="/editarCarros" />
        <Route exact component={FilterCars} path="/filtro" />
        <Route component={NotFound} path="*" />
      </Switch>
    </Router>
  )
}

export default Routess
