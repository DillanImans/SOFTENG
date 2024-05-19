import React from 'react';

import './styling/professorAppList.css';

const FreeComponent = () => {
  return (
    <div className = "applicationProfessor-wrapper">
<body>
    <div class="applicationProfessor-panel">
        <table>
            <thead>
                <tr>
                    <th>Students' Name</th>
                    <th>Student ID</th>
                    <th>Department</th>
                    <th>Course Degree</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name 1</td>
                    <td>2019313291</td>
                    <td>Software</td>
                    <td>Bachelor</td>
                    <td><button class="applicationProfessor-status applicationProfessor-accepted">Accepted</button></td>
                </tr>
                <tr>
                    <td>Name 2</td>
                    <td>2020313281</td>
                    <td>Software</td>
                    <td>Master</td>
                    <td><button class="applicationProfessor-status applicationProfessor-rejected">Rejected</button></td>
                </tr>
                <tr>
                    <td>Name 3</td>
                    <td>2019313291</td>
                    <td>Software</td>
                    <td>PhD</td>
                    <td><button class="applicationProfessor-status applicationProfessor-ongoing">Ongoing</button></td>
                </tr>
                <tr>
                    <td>Name 4</td>
                    <td>2019313291</td>
                    <td>Software</td>
                    <td>Bachelor</td>
                    <td><button class="applicationProfessor-status applicationProfessor-accepted">Accepted</button></td>
                </tr>
                <tr>
                    <td>Name 5</td>
                    <td>2019313291</td>
                    <td>Software</td>
                    <td>Master</td>
                    <td><button class="applicationProfessor-status applicationProfessor-rejected">Rejected</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
    </div>


  )
}

export default FreeComponent;