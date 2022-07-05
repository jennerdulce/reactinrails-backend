import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import Navigation from './components/Navigation'
import AboutUs from './pages/AboutUs'
import Header from './components/Header'
import Home from './pages/Home'

class App extends React.Component {
  render () {
    
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <Header {...this.props}/>
        <Router>
          {/* <Navigation /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutUs} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App
