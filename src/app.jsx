import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home'
import Update from './containers/Update'
import HandsOnHome from './containers/handsOn/HandsOnHome'
import HandsOnUpdate from './containers/handsOn/HandsOnUpdate'

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="todo">
      <Route exact path='/' component={Home} />
      <Route path='/update' component={Update} />
      <Route exact path='/hands_on' component={HandsOnHome} />
      <Route path='/hands_on/update' component={HandsOnUpdate} />
    </div>
  </BrowserRouter>
)

export default App