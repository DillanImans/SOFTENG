import React from 'react';

import './styling/ProfessorLabInfo.css';

const ProfessorLabInfo = () => {
  return (
    <div className="pli-up">
        <div class="form-container">
            <h1 className="pli-h1">Create New Lab</h1>
            <form>
                <div class="row">
                    <div class="form-group">
                        <label className="pli-label" for="fullName">Full Name</label>
                        <input type="text" id="fullName"/>
                    </div>
                    <div class="form-group">
                        <label className="pli-label" for="time">Time</label>
                        <input type="text" id="time"/>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label className="pli-label" for="idNumber">ID Number</label>
                        <input type="text" id="idNumber"/>
                    </div>
                    <div class="form-group">
                        <label className="pli-label" for="place">Place</label>
                        <input type="text" id="place"/>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label className="pli-label" for="labName">Lab Name</label>
                        <input type="text" id="labName"/>
                    </div>
                    <div class="form-group">
                        <label className="pli-label" for="language">Language</label>
                        <input type="text" id="language"/>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label className="pli-label" for="major">Major</label>
                        <input type="text" id="major"/>
                    </div>
                    <div class="form-group">
                        <label className="pli-label" for="salary">Salary</label>
                        <input type="text" id="salary"/>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label className="pli-label" for="majorSubcategory">Major Subcategory</label>
                        <input type="text" id="majorSubcategory"/>
                    </div>
                    <div class="form-group">
                        <label className="pli-label" for="openSlots">Open Slots</label>
                        <input type="number" id="openSlots" value="10"/>
                    </div>
                </div>
                <button type="submit" class="button-save">Save Changes</button>
            </form>
        </div>
      </div>
  )
}

export default ProfessorLabInfo;