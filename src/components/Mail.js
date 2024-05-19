import React from 'react';

import './styling/Mail.css';

const Mail = () => {

  function viewMail(){
    document.getElementById('MailOverlay').style.display = 'block';
    document.getElementById('mailDetailsWrapper').style.display = 'block';
  }

  function sendMail(){
    document.getElementById('MailOverlay').style.display = 'block';
    document.getElementById('mailSentMessage').style.display = 'block';
  }

  function exitPopUp(){
    document.getElementById('MailOverlay').style.display = 'none';
    document.getElementById('mailDetailsWrapper').style.display = 'none';
    document.getElementById('mailSentMessage').style.display = 'none';
  }

  return (
    <div className = "Mail-wrapper">
      <div className = "MailContainer">
        <div className = "mContainerLeft">
          <div className = "IncomingMail">
            <h3>
              Incoming Mail
            </h3>
            <div className = "IncomingMailbox">
              <div className = "IncomingMailEntry"
                    onClick = {viewMail}>
                <label className = "IncomingMailDate">
                  Jan 1, 2024
                </label>
                <label className = "IncomingMailTitle">
                  Testing for Longer Titles To Check Boundaries
                </label>
                <label className = "IncomingMailSender">
                  sent by Prof.Kendrick
                </label>
              </div>
            </div>

          </div>
          <div className = "SentMail">
            <h3>
              Sent Mail
            </h3>
            <div className = "SentMailbox">
              <div className = "SentMailEntry"
                    onClick = {viewMail}>
                <label className = "SentMailDate">
                  Jan 1, 2024
                </label>
                <label className = "SentMailTitle">
                  Title
                </label>
                <label className = "SentMailRecipient">
                  sent to Prof.Lamar
                </label>
              </div>

            </div>

          </div>
        </div>
        <div className = "mContainerRight">
          <h3 className = "CreateMailTitle">
            Create Mail
          </h3>
          <form className = 'MailForm'>
            <label className = 'MailFormRecEmailLabel' 
                    for = "rec_email">
              Recipient's ID</label><br />
            <input className = 'MailFormRecEmailInput'
                    type = "text" 
                    id = "rec_email" 
                    name= "rec_email"></input><br />
            <label className = 'MailFormTitleLabel'
                    for = "mail_title">
                    Title</label><br />
            <input className = 'MailFormTitleInput'
                    type = "text" id = "mail_title" 
                    name = "mail_title"></input><br />
            <label className = 'MailFormContentLabel'
                    for = "mail_content">Content</label><br />
            <textarea className = 'MailFormContentTextArea'
                      id = "mail_content" 
                      name = "mail_content"
                      rows = "14"
                      ></textarea>
          </form>
          <div className = "SendMailButtonWrapper">
            <button className = "SendMailButton"
                    id = "sendEmailButton"
                    onClick = {sendMail}>
              Send Mail
            </button>
          </div>

        </div>
      </div>

      <div className = "MailOverlay" id = "MailOverlay">
        <div className = "PopUp" id = "popup">
          <button className = "PopUpExitButton"
                  id = "popUpExitButton"
                  onClick = {exitPopUp}>
            X
          </button>
          <div className = "MailDetailsWrapper"
                id = "mailDetailsWrapper">
            <div className = "MailDetails">
              <div className = "MailHeader">
                <label className = "MailSenderRecipient">Mail Sent by</label>
                <label className = "MailDate">Sent on</label>
                <label className = "MailTitle">Title here</label>
              </div>
              <p className = "MailContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum commodo ligula. 
              Nulla sit amet suscipit nisl. Pellentesque rutrum porttitor massa, et gravida ipsum ullamcorper in. 
              Proin est leo, viverra vel sem nec, cursus fringilla leo. Vivamus euismod tellus vel fringilla rhoncus. 
              In nec fringilla est. Maecenas ut interdum libero, ut dapibus justo. Vestibulum eleifend feugiat feugiat. 
              Etiam efficitur ornare lectus non bibendum. Aenean vitae mauris vitae felis commodo convallis eu nec urna. 
              Donec euismod, felis et interdum facilisis, odio nibh suscipit sem, et placerat metus erat a lacus. 
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              Nullam a magna luctus arcu sodales blandit id sed velit. Mauris et nisi convallis, posuere mi id, viverra sapien. 
              Nulla a finibus mauris, ut euismod dolor. Curabitur vulputate ultrices tincidunt.<br></br>
              <br></br>
              Mauris non mauris fermentum, pellentesque lectus vitae, porta mi. Curabitur at quam ante. 
              Suspendisse tempor libero eu est ultrices, sit amet sollicitudin ante ultricies. Maecenas nec posuere dolor. 
              Donec tempus, sem ac tristique mollis, odio ligula porttitor arcu, in pretium purus elit id justo. 
              Mauris faucibus, quam non tristique ultrices, orci nisi aliquet nulla, sed imperdiet sapien dui in magna. 
              Nam convallis nibh eget libero consectetur, vitae scelerisque nisl placerat. In hac habitasse platea dictumst. 
              Sed congue egestas maximus. Proin cursus libero quis gravida efficitur. Vivamus eget semper nisl. 
              Suspendisse mollis quam eget magna iaculis, nec lobortis magna volutpat. Maecenas at ultricies eros, 
              fringilla interdum nisl. Phasellus aliquet sem ut dolor ullamcorper, eu tempor tellus faucibus. 
              Donec ut lectus convallis enim dictum suscipit nec et enim. Proin luctus rutrum lacus eu blandit.
              </p>
            </div>
          </div>
          <div className = "MailSentMessage"
                id = "mailSentMessage">
            <h1 className = "MailSentText">
              Mail Sent
            </h1>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Mail;