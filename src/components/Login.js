import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { currentLinkAction } from '../actions';

import './styling/Login.css';

class Login extends React.Component {

  updateToStudentDashboardState = () => {
    this.props.currentLinkAction('student-dashboard')
  }

  updateToProfessorDashboardState = () => {
    this.props.currentLinkAction('professor-dashboard')
  }

  render(){
    return (
  <>
    <div className='Login-wrapper'>
    <body className='Login-body'>
        <div class="login-container">
          <h1 class='login-h1'>Login to SKKU Lab</h1>
          <form class='login-form' action="#">
            <div class="login-form-group">
              <label class='login-label, login-left' for="username">ID</label>
              <input type="text" id="username" name="username" placeholder="Username" />
            </div>
            <div class="login-form-group">
              <label class='login-label' for="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" />
            </div>
            <div class="login-form-group-b">
              <div class = 'login-bonk'>
                <input type="checkbox" id="remember_me" name="remember_me" class="input-log" />
                <label for="remember_me">Remember me</label>
              </div>
              <Link className='login-a' to="/forgot-password" class="login-forgot-password">Forgot Password?</Link>
            </div>
            <Link to="/professor-dashboard" onClick= { this.updateToProfessorDashboardState }>
              <button class='login-button' type="submit">Log In</button>
            </Link>
            <center><p class='login-p'>New? <Link class='login-a' to="/signup">Create Account</Link></p></center>
          </form>
        </div>
      </body>
      </div>
      </> 
    )
  }
}

const mapStateToProps = (state) => {
  return { currentLinkState: state.currentLinkState }
}

export default connect(mapStateToProps, { currentLinkAction })(Login);