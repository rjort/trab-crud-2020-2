import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import UsersCrud from './Components/UsersCrud.js'
import ProductsCrud from './Components/ProductsCrud.js'
import ResponsiveDrawer from './Components/ResponsiveDrawer.js'

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveDrawer/>
        <Switch>
          <Route exact path="/">
            <UsersCrud/>
          </Route>
          <Route path="/products">
            <ProductsCrud/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
