import React from 'react';

import './styling/professorDashboard.css';

const ProfessorDashboard = () => {
  return (
    <div className = "profDashboard-wrapper">
        <body>
    <div class="profDashboard-container">
        <header>
            <div class="profDashboard-header-content">
                <h1>Welcome To SKKU Lab, <span>Your Name</span></h1>
            </div>
        </header>
        <section class="profDashboard-notifications">
            <div class="profDashboard-notification-item">
                <label>Not Review: Application</label>
                <div class="profDashboard-count" id="applications">421</div>
            </div>
            <div class="profDashboard-notification-item">
                <label>Unread Messages</label>
                <div class="profDashboard-count" id="messages">3</div>
            </div>
            <div class="profDashboard-notification-item">
                <label>Report</label>
                <div class="profDashboard-count" id="reports">15</div>
            </div>
        </section>
        <div class="profDashboard-main-content">
            <section class="profDashboard-schedule">
                <h2>My Schedule</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th>
                            <th>Friday</th><th>Saturday</th><th>Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>9:00</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td>10:00</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td>11:00</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td>12:00</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td>13:00</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td>14:00</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td>15:00</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    </tbody>
                </table>
            </section>
            <section class="profDashboard-reminders">
                <h2>Reminder</h2>
            </section>
        </div>
    </div>
</body>
    </div>

  )
}

export default ProfessorDashboard;