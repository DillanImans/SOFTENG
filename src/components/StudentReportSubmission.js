import React from 'react';

import './styling/StudentReportSubmission.css';

const StudentReportSubmission = () => {

  function submitReport(){
    document.getElementById('overlaySR').style.display = 'block';
  }

  function exitPopUp(){
    document.getElementById('overlaySR').style.display = 'none';
  }

  function createNewEntry(){
    var newDiv = document.createElement("div");
    var newLabel = document.createElement("label");
    var newButton = document.createElement("button");

    newLabel.textContent = "code1.ipynb";
    newLabel.classList.add("ProgressReportFileSubmissionEntryName");

    newButton.textContent = "X";
    newButton.classList.add("ProgressReportFileSubmissionEntryX");
    newButton.addEventListener("click", function() {
      newDiv.parentNode.removeChild(newDiv);
    });

    newDiv.classList.add("ProgressReportFileSubmissionEntry");
    newDiv.appendChild(newButton);
    newDiv.appendChild(newLabel);

    document.getElementById('progressReportFileSubmissionFiles').appendChild(newDiv);
  }

  return (
    <div className = "StudentReportSubmission-wrapper">
      <div className = "Container">
        <h1 className = "PageTitle">
          Progress Report Submission
        </h1>
        <div className = "ProgressReportTitle">
          <h3 className = "ProgressReportTitleHeader">
            Progress Report Title
          </h3>
          <form className = "ProgressReportTitleForm">
            <input className = "ProgressReportTitleFormInput" type = "text" id="progressReportTitle" name="progressReportTitle"></input>
          </form>
        </div>
        <div className = "ProgressReportDetails">
          <h3 className = "ProgressReportDetailsHeader">
            Progress Report Details
          </h3>
          <form className = "ProgressReportDetailsForm">
            <textarea className = "ProgressReportDetailsFormTextArea"
                      id = "progressReportDetails" 
                      name = "progressReportDetails"
                      rows = "12">
            </textarea>
          </form>

        </div>
        <div className = "ProgressReportSubmission">
          <div className = "ProgressReportSubmissionLeft">
            <h3 className = "ProgressReportFileSubmissionTitle">
              File Submission
            </h3>
            <div className = "ProgressReportFileSubmission">
              <div className = "ProgressReportFileSubmissionIcon">
                <img className = "ProgressReportFileSubmissionIconImage" 
                      src = "https://www.svgrepo.com/show/326644/folder-open-outline.svg"
                      ></img>
                <input type="file"/>
              </div>
              <div className = "ProgressReportFileSubmissionFiles"
                    id = "progressReportFileSubmissionFiles">
                {/* <div className = "ProgressReportFileSubmissionEntry">
                  <label className = "ProgressReportFileSubmissionEntryName">
                    code1.ipynb has been uploaded
                  </label>
                  <button className = "ProgressReportFileSubmissionEntryX">X</button>
                </div> */}
              </div>
            </div>
          </div>
          <div className = "ProgressReportSubmissionRight">
            <button className = "ProgressReportSubmissionRightButton"
                    id = "submitButton"
                    onClick={submitReport}>
              Submit Report
            </button>
          </div>
        </div>
      </div>
      
      <div className = "OverlaySR" id = "overlaySR">
        <div className = "PopUpSR" id = "popupSR">
          <button className = "PopUpExitButtonSR"
                  id = "popUpExitButtonSR"
                  onClick={exitPopUp}>
            X
          </button>
          <h1 className = "PopUpTextSR">
            Progress Report Submitted
          </h1>
        </div>
      </div>
      
    </div>
  )
}

export default StudentReportSubmission;