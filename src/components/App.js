import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { currentLinkAction } from '../actions';

import './styling/header.css';
import './styling/template.css'

import StudentHeader from './StudentHeader';
import ProfessorHeader from './ProfessorHeader';
import SignLogRouter from './SignLogRouter';

class App extends React.Component {

  componentDidMount(){
    if(!this.props.currentLinkState) {
      this.props.currentLinkAction('login')
    }
  }

  render(){

    const { currentLinkState } = this.props;

    const renderHeader = () => {
      if (currentLinkState === 'student-dashboard' || currentLinkState === 'student-profile' || currentLinkState === 'student-mail' || currentLinkState === 'student-searchLabs' || currentLinkState === 'student-appList' || currentLinkState === 'student-portfolioConfig' || currentLinkState === 'student-dashboard' || currentLinkState === 'student-reportSubmission') {
        return <StudentHeader />
      } else if (currentLinkState === 'professor-dashboard' || currentLinkState === 'professor-profile' || currentLinkState === 'professor-mail' || currentLinkState === 'professor-appList' || currentLinkState === 'professor-reportSubmission' || currentLinkState === 'professor-labInfo'){
        return <ProfessorHeader />
      } else if (currentLinkState === 'login') {
        return <SignLogRouter />
      }
    }

    return(
      <Router>
        
        {renderHeader()}

      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentLinkState: state.currentLinkState }
}

export default connect(mapStateToProps, { currentLinkAction })(App)