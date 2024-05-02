import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { currentLinkAction } from '../actions';

import './styling/header.css';

import Header from './Header';

class App extends React.Component {

  componentDidMount(){

  }

  render(){
    return(
      <Router>
        <Header/>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentLinkState: state.currentLinkState }
}

export default connect(mapStateToProps, { currentLinkAction })(App)