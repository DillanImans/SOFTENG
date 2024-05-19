import React from 'react';

import './styling/StudentProfile.css';
import user from '../icons/person.png'
import file from '../icons/document.png'

const StudentPortfolio = () => {
  return (
    <div className = "profile-wrapper">
      <div className= "ProfileInside-wrapper"> 
        <div className="ProfileInsideHeader-wrapper">
            <p className ="Profile-header">
              Hey *name*!
            </p>
        </div> 

        <div className="ProfileInsideMain-wrapper">
          <div className = "ProfileInsideMainLeft-wrapper">
            <div className ="ProfileName-wrapper">
              <p className = "ProfileName-text">
                Name
              </p>

              <input className ="ProfileName-bar" type="text"
              placeholder="Your Name">

              </input>

            </div>

            <div className ="ProfileEmail-wrapper">
              <p className = "ProfileEmail-text">
                Email
              </p>

              <input className ="ProfileEmail-bar" type="text"
              placeholder="Your Email">
              </input>

            </div>

            <div className ="ProfileStudentId-wrapper">
              <p className = "ProfileStudentId-text">
                Student ID
              </p>

              <input className ="ProfileStudentId-bar" type="text"
              placeholder="Your Student ID">

              </input>

            </div>

            <div className ="ProfilePassword-wrapper">
              <p className = "ProfilePassword-text">
                Password
              </p>

              <input className ="ProfilePassword-bar" type="password"
              placeholder="Your Password">

              </input>

            </div>

            <div className ="ProfileConfirmPassword-wrapper">
              <p className = "ProfileConfirmPassword-text">
                Confirm Password
              </p>

              <input className ="ProfileConfirmPassword-bar" type="password">

              </input>

            </div>
            <div className ="ProfileButton-wrapper">
              <button className = "Profile-button">
               Save Changes
              </button>
            </div>
            
          </div>

          <div className = "ProfileInsideMainRight-wrapper">

            <div className="ProfileAccount-wrapper">
              <img className="ProfileAccount-logo" 
                src={user}/>
            </div>

            <div className="ProfileChangePicture-wrapper">
              <input type="file" id="files" ></input>
              <label for="files" className="ProfileChangePicture-text">
                change your profile picture here
              </label>
            </div>

          </div>

        </div>

        
      </div>
    </div>
  )
}

export default StudentPortfolio;