import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { currentLinkAction } from '../actions';

import FreeComponent from './FreeComponent'

import './styling/header.css';

import bell from '../icons/bell.png'
import briefcase from '../icons/briefcase.png'
import document from '../icons/document.png'
import home from '../icons/home.png'
import mail from '../icons/mail.png'
import monitor from '../icons/monitor.png'
import search from '../icons/search.png'

class Header extends React.Component {

  // (prefix with Student on everything) Profile, Mail, Search Labs, Application List, Portfolio Configuration, Dashboard, Report Submission

  componentDidMount(){
    if (window.location.href === 'http://localhost:3000/student-profile'){
      this.props.currentLinkAction('student-profile')
    } else if (window.location.href === 'http://localhost:3000/student-mail'){
      this.props.currentLinkAction('student-mail')
    } else if (window.location.href === 'http://localhost:3000/student-searchLabs') {
      this.props.currentLinkAction('student-searchLabs')
    } else if (window.location.href === 'http://localhost:3000/student-appList') {
      this.props.currentLinkAction('student-appList')
    } else if (window.location.href === 'http://localhost:3000/student-portfolioConfig') {
      this.props.currentLinkAction('student-portfolioConfig')
    } else if (window.location.href === 'htpp://localhost:3000/student-dashboard') {
      this.props.currentLinkAction('student-dashboard')
    } else if (window.location.href === 'http://localhost:3000/student-reportSubmission') {
      this.props.currentLinkAction('student-reportSubmission')
    }
  }

  updatePLinkState = () => {
    this.props.currentLinkAction('student-profile');
  }

  updateMLinkState = () => {
    this.props.currentLinkAction('student-mail');
  }

  updateSLLinkState = () => {
    this.props.currentLinkAction('student-searchLabs');
  }

  updateALLinkState = () => {
    this.props.currentLinkAction('student-appList');
  }

  updatePCLinkState = () => {
    this.props.currentLinkAction('student-portfolioConfig');
  }

  updateDLinkState = () => {
    this.props.currentLinkAction('student-dashboard');
  }

  updateRSLinkState = () => {
    this.props.currentLinkAction('student-reportSubmission');
  }

  getTitle = () => {
    const { currentLinkState } = this.props;
    switch (currentLinkState) {
      case 'student-profile':
        return 'Profile';
      case 'student-mail':
        return 'Mail';
      case 'student-searchLabs':
        return 'Search Labs';
      case 'student-appList':
        return 'Application List';
      case 'student-portfolioConfig':
        return 'Portfolio Configuration';
      case 'student-dashboard':
        return 'Dashboard';
      case 'student-reportSubmission':
        return 'Report Submission';
      default:
        return 'Dashboard';
    }
  }

  render(){
    return(
      // <Router>
        <div className="wrapper">
          <div className="topbar">

            <div className="left-topbar">
              <Link to="student-profile" id="student-profile" onClick = {this.updatePLinkState} className="profilePictureIcon">
                pp
              </Link>
              <div>
                <img src={bell} className="icon-st notificationIcon icon-ltb"/>
              </div>

              <Link to = "student-mail" id="student-mail" onClick = {this.updateMLinkState}>
                <img className="icon-st mailIcon icon-ltb" src={mail}/>
              </Link>

            </div>

            <div className="right-topbar">
              <p className="rtb-title">
                {this.getTitle()}
              </p>
            </div>

          </div>
          
          <div className="bottomContent">

            <div className="sidebar">
              <div className="labSearchingList">
                <div className="header-l">
                  Lab Searching
                </div>

                <Link to="/student-searchLabs" id="student-searchLabs" onClick = {this.updateSLLinkState} className="subtopic">
                  <img className="icon-st" src={search}/>
                  <p className="title-st">
                    SEARCH LABS
                  </p>
                </Link>

                <Link to="/student-appList" id="student-appList" onClick = {this.updateALLinkState} className="subtopic">
                  <img className="icon-st" src={monitor}/>
                  <p className="title-st">
                    APPLICATION LIST
                  </p>
                </Link>

                <Link to="/student-portfolioConfig" id="student-portfolioConfig" onClick = {this.updatePCLinkState} className="subtopic">
                  <img className="icon-st" src={briefcase}/>
                  <p className="title-st">
                    PORTFOLIO CONFIGURATION
                  </p>
                </Link>

              </div>

              <div className="labManagementList">
                <div className="header-l">
                  Lab Management
                </div>

                <Link to="/student-dashboard" id="student-dashboard" onClick = {this.updateDLinkState} className="subtopic">
                  <img className="icon-st" src={home}/>
                  <p className="title-st">
                    DASHBOARD
                  </p>
                </Link>

                <Link to="/student-reportSubmission" id="student-reportSubmission" onClick = {this.updateRSLinkState} className="subtopic">
                  <img className="icon-st" src={document}/>
                  <p className="title-st">
                    REPORT SUBMISSION
                  </p>
                </Link>

              </div>

            </div>

            <div className="main">
              <Routes>
                  {/* <Route path="/student-profile" component={StudentProfile} />
                  <Route path="/student-mail" component={StudentMail} />
                  <Route path="/student-searchLabs" component={StudentSearchLabs} />
                  <Route path="/student-appList" component={StudentAppList} />
                  <Route path="/student-portfolioConfig" component={StudentPortfolioConfig} />
                  <Route path="/student-dashboard" component={StudentDashboard} />
                  <Route path="/student-reportSubmission" component={StudentReportSubmission} /> */}
                  <Route path="/student-dashboard" element={<FreeComponent/>} />
                </Routes>
            </div>

          </div>
        </div>
      // </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentLinkState: state.currentLinkState }
}

export default connect(mapStateToProps, { currentLinkAction })(Header)