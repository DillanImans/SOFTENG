import React from 'react';

import './styling/ReportView.css';

const ReportView = () => {
  return (
    <div className = "ReportViewPage-wrapper">
      <div className= "ReportViewInside-wrapper">
        <div className= "ReportViewHeader-wrapper">
          <h1 className="ReportViewHeader-text rv-hi">
            Report View
          </h1>
        </div>

        <div className ="ReportViewStudent-wrapper">
          <div className ="ReportViewStudentName-wrapper"> 
            <p className="ReportViewName-text rv-p">
              Student's Name
            </p>

            <input className= "ReportViewName-bar"
            type="text" placeholder="Student's Name" disabled/>

          </div>

          <div className="ReportViewStudentId-wrapper">
            <p className="ReportViewStudentId-text rv-p">
              Student's ID
            </p>

            <input className= "ReportViewStudentId-bar"
            type="text" placeholder="Student's ID" disabled/>
          </div>
        </div>

        <div className="ReportViewTitle-wrapper">
          <p className="ReportViewTitle-text rv-p">
              Report Title
          </p>

          <input className= "ReportViewTitle-bar"
          type="text" placeholder="Report Title" disabled/>
        </div>

        <div className="ReportViewDetails-wrapper">
          <p className="ReportViewDetails-text rv-p">
              Report Details
          </p>

          <input className= "ReportViewDetails-bar"
          type="text" placeholder="Report Details" disabled/>
        </div>

        <div className="ReportViewCloseButton-wrapper">
          <button className = "ReportViewCloseButton-button">
            Save Changes
          </button>
        </div>

      </div>
    </div>
  )
}

export default ReportView;