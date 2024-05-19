import React from 'react';

import './styling/StudentDashboard.css';

const StudentDashboard = () => {
  return (
    <div className = "studentDashboard-wrapper">
<body>
    <div class="studentDashboard-header">
        <h1>Welcome To Lab Name</h1>
        <h2>Dylan</h2>
    </div>
    <div class="studentDashboard-panel">
        <div class="studentDashboard-container single">
            <div class="studentDashboard-box incoming">
                <h3>Incoming Mail</h3>
                <div class="studentDashboard-button-list">
                    <button onclick="alert('Mail Details: Title Title Mail Title from Prof. Kendrick')">Jan 1, 2024 - Title Title Mail Title from Prof. Kendrick</button>
                    <button onclick="alert('Mail Details: Title Title Mail Title from Prof. Kendrick')">Jan 1, 2024 - Title Title Mail Title from Prof. Kendrick</button>
                </div>
            </div>
        </div>
        <div class="studentDashboard-container">
            <div class="studentDashboard-box half">
                <h3>Submitted Progress Reports</h3>
                <div class="studentDashboard-button-list">
                    <button onclick="alert('Report Details: Why DAMN! won a Nobel Prize')">Jan 1, 2024 - Why DAMN! won a Nobel Prize</button>
                    <button onclick="alert('Report Details: Why DAMN! won a Nobel Prize')">Jan 1, 2024 - Why DAMN! won a Nobel Prize</button>
                    <button onclick="alert('Report Details: Why DAMN! won a Nobel Prize')">Jan 1, 2024 - Why DAMN! won a Nobel Prize</button>
                </div>
            </div>
            <div class="studentDashboard-box half">
                <h3>Personal Notes</h3>
                <form id="studentDashboard-noteForm">
                    <textarea id="noteText" name="noteText" rows="4" cols="50" placeholder="Enter your notes here..."></textarea>
                    <button type="submit">Save Note</button>
                </form>
            </div>
        </div>
    </div>
</body>
    </div>
  )
}

export default StudentDashboard;