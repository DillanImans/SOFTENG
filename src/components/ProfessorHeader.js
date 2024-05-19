import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { currentLinkAction } from '../actions';

import './styling/header.css';

import bell from '../icons/bell.png'
import briefcase from '../icons/briefcase.png'
import document from '../icons/document.png'
import home from '../icons/home.png'
import mail from '../icons/mail.png'
import monitor from '../icons/monitor.png'
import search from '../icons/search.png'


// Professor Profile
import ProfessorProfile from './ProfessorProfile'

// Professor Mail
import Mail from './Mail'

// Professor Lab Info
import ProfessorLabInfo from './ProfessorLabInfo';

// Professor App List
import ProfessorAppList from './professorAppList'

// Professor Report Submission
import ProfessorReportSubmission from './ProfessorReportSubmission'

// Professor Dashboard
import ProfessorDashboard from './ProfessorDashboard'



class ProfessorHeader extends React.Component {

  componentDidMount(){
    if (window.location.href === 'http://localhost:3000/professor-profile'){
      this.props.currentLinkAction('professor-profile')
    } else if (window.location.href === 'http://localhost:3000/professor-mail'){
      this.props.currentLinkAction('professor-mail')
    } else if (window.location.href === 'http://localhost:3000/professor-appList') {
      this.props.currentLinkAction('professor-appList')
    } else if (window.location.href === 'http://localhost:3000/professor-dashboard') {
      this.props.currentLinkAction('professor-dashboard')
    } else if (window.location.href === 'http://localhost:3000/professor-reportSubmission') {
      this.props.currentLinkAction('professor-reportSubmission')
    } else if (window.location.href === 'http://localhost:3000/professor-labInfo') {
      this.props.currentLinkAction('professor-labInfo')
    }
  }

  updatePPLinkState = () => {
    this.props.currentLinkAction('professor-profile');
  }

  updatePMLinkState = () => {
    this.props.currentLinkAction('professor-mail');
  }

  updatePALLinkState = () => {
    this.props.currentLinkAction('professor-appList');
  }

  updatePDLinkState = () => {
    this.props.currentLinkAction('professor-dashboard');
  }

  updatePRSLinkState = () => {
    this.props.currentLinkAction('professor-reportSubmission');
  }

  updatePLILinkState = () => {
    this.props.currentLinkAction('professor-labInfo');
  }

  getTitle = () => {
    const { currentLinkState } = this.props;
    switch (currentLinkState) {
      case 'professor-profile':
        return 'Profile';
      case 'professor-mail':
        return 'Mail';
      case 'professor-appList':
        return 'Application List';
      case 'professor-dashboard':
        return 'Dashboard';
      case 'professor-reportSubmission':
        return 'Report Submission';
      case 'professor-labInfo':
        return 'Lab Info';
      default:
        return 'Dashboard';
    }
  }

  render(){
    return(
      // <Router>
        <div className="header-wrapper">
          <div className="topbar">

            <div className="left-topbar">
              <Link to="professor-profile" id="professor-profile" onClick = {this.updatePPLinkState} className="profilePictureIcon">
                pp
              </Link>
              <div>
                <img src={bell} className="icon-st notificationIcon icon-ltb"/>
              </div>

              <Link to = "professor-mail" id="professor-mail" onClick = {this.updatePMLinkState}>
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
              <div className="List">

                <Link to="/professor-dashboard" id="professor-dashboard" onClick = {this.updatePDLinkState} className="subtopic">
                  <img className="icon-st" src={home}/>
                  <p className="title-st">
                    DASHBOARD
                  </p>
                </Link>

                <Link to="/professor-labInfo" id="professor-labInfo" onClick = {this.updatePLILinkState} className="subtopic">
                  <img className="icon-st" src={briefcase}/>
                  <p className="title-st">
                    LAB INFO
                  </p>
                </Link>

                <Link to="/professor-appList" id="professor-appList" onClick = {this.updatePALLinkState} className="subtopic">
                  <img className="icon-st" src={monitor}/>
                  <p className="title-st">
                    APPLICATION LIST
                  </p>
                </Link>

                <Link to="/professor-reportSubmission" id="professor-reportSubmission" onClick = {this.updatePRSLinkState} className="subtopic">
                  <img className="icon-st" src={document}/>
                  <p className="title-st">
                    REPORT SUBMISSION
                  </p>
                </Link>

              </div>

            </div>

            <div className="main">
              <Routes>
                <Route path='/professor-profile' element={<ProfessorProfile/>}/>
                <Route path='/professor-mail' element={<Mail/>}/>
                <Route path='/professor-labinfo' element={<ProfessorLabInfo/>}/>
                <Route path='/professor-appList' element={<ProfessorAppList/>}/>
                <Route path='/professor-reportSubmission' element={<ProfessorReportSubmission/>}/>
                <Route path='/professor-dashboard' element={<ProfessorDashboard/>}/>

                  
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

export default connect(mapStateToProps, { currentLinkAction })(ProfessorHeader)