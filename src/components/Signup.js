import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styling/Signup.css';

const Signup = () => {

  const [role, setRole] = useState('student');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  }

  const getIDLabel = () => {
    return role === 'student' ? 'Student ID:' : 'Professor ID:';
  }

  const getIDPlaceholder = () => {
    return role === 'student' ? 'Enter your student ID:' : 'Enter your professor ID';
  }

  return(
  <>
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Sign Up</title>
    <link rel="stylesheet" href="style.css"/>
  </head>
  <div className='Signup-student-wrapper' >
  <body className='Signup-student-body'>
    <div class="Signup-student-container">
      <h1 className='Signup-student-h1'>Sign Up</h1>
      <form action="#">
        <label for="role"></label>
        <select className='Signup-student-select' name="role" id="role" onChange = {handleRoleChange} value = {role}>
          <option value="student">Student</option>
          <option value="professor">Professor</option>
        </select>

        <label for="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="Enter your email"/>

        <label htmlFor="id">{getIDLabel()}</label>
        <input type="text" name="id" id="id" placeholder={getIDPlaceholder()} />

        <label for="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Enter your password"/>

        <center><button className='Signup-student-button' type="submit">Create Account</button></center>
      </form>
      <center><p className='Signup-student-p'>Already have an account? <Link className='Signup-student-a' to="/login">Sign In</Link></p></center>
    </div>
  </body>
  </div>
</> 
  )
}
export default Signup;