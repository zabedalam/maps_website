import React, { Component } from 'react'
// import { Router } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class MainComponent extends Component {
  render() {
    return (
      <>
      <Router>
      <LandingPage></LandingPage>
      </Router>
        
      </>
    )
  }
}
