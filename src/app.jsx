import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home'
import HandsOnHome from './containers/handsOn/HandsOnHome'

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="todo">
      <Route exact path='/' component={Home} />
      <Route exact path='/hands_on' component={HandsOnHome} />
    </div>
  </BrowserRouter>
)

export default App