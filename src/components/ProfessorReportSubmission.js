import React from 'react';

import './styling/ProfessorReportSubmission.css';

const ProfessorReportSubmission = () => {
  return (
    <div className = "reportSubmission-wrapper">
<body>
    <div class="reportSubmission-panel">
    <table>
        <thead>
            <tr>
                <th>Students' Name</th>
                <th>Student ID</th>
                <th>Department</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Name 1</td>
                <td>201331291</td>
                <td>Software</td>
                <td><button>View Report</button></td>
            </tr>
            <tr>
                <td>Name 2</td>
                <td>202331281</td>
                <td>Software</td>
                <td><button>View Report</button></td>
            </tr>
            <tr>
                <td>Name 3</td>
                <td>201331291</td>
                <td>Software</td>
                <td><button>View Report</button></td>
            </tr>
            <tr>
                <td>Name 4</td>
                <td>201331291</td>
                <td>Software</td>
                <td><button>View Report</button></td>
            </tr>
            <tr>
                <td>Name 5</td>
                <td>201331291</td>
                <td>Software</td>
                <td><button>View Report</button></td>
            </tr>
        </tbody>
    </table>
    </div>
</body>
    </div>
  )
}

export default ProfessorReportSubmission;