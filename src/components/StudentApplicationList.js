import React from 'react';

import './styling/StudentApplicationList.css';

const StudentApplicationList = () => {
  return (
    <div className="sal-container">
      <h1 className="sal-h1">Applications List</h1>
      <div className="section accepted">
        <div className="sal-application">
          <div
            className="icon-professor"
            style={{ backgroundImage: `url('path/to/kendrick-lamar-photo.jpg')` }}
          ></div>
          <div className="details">
            <div>
                <span>Mathematics</span>
                <strong>Graph Theory</strong>
                <em>Prof. Kendrick Lamar</em>
            </div>
            <h2>ACCEPTED</h2>
          </div>
        </div>
      </div>
      <div className="section rejected">
        <div className="sal-application">
          <div
            className="icon-professor"
            style={{ backgroundImage: `url('path/to/future-photo.jpg')` }}
          ></div>
          <div className="details">
            <div>
                <span>Music</span>
                <strong>Like That</strong>
                <em>Prof. Future</em>
            </div>
            <h2>REJECTED</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentApplicationList;
