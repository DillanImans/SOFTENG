import React from 'react';

import './styling/Portfolio-Configuration.css';

const PortfolioConfiguration = () => {
  return(
    <>
    <div className = 'forceCenter'>
    <body className='Portfolio-Configuration-body'>
      <div class="Portfolio-Configuration-container">
        <h1 className="pc-h1">Portfolio Configuration</h1>
        <p className="margin-bot-extra">When you apply for labs, this portfolio will be sent to the professor. Make sure to fill it properly as it is only changeable here.</p>
        
        <div class="Portfolio-Configuration-section">
          <h2 className='Portfolio-Configuration-h2'>Introduction</h2>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>Name</label>
            <input type="text" placeholder=" Full Name"/>
          </div>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>Student ID</label>
            <input type="text" placeholder="Student ID"/>
          </div>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>Current School Year</label>
            <select>
              <option>--Current School Year--</option>
              <option>Year 1 Semester 1</option>
              <option>Year 1 Semester 2</option>
              <option>Year 2 Semester 1</option>
              <option>Year 2 Semester 2</option>
              <option>Year 3 Semester 1</option>
              <option>Year 3 Semester 2</option>
              <option>Year 4 Semester 1</option>
              <option>Year 4 Semester 2</option>
            </select>
            <p>If on holiday, select the next school semester</p>
          </div>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>Languages Spoken</label>
            <input type="text" placeholder="Laguages"/>
          </div>
        </div>
    
        <div class="Portfolio-Configuration-section">
          <h2>Contact Information</h2>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>Email</label>
            <input type="email" placeholder="Email"/>
          </div>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>Phone Number</label>
            <input type="tel" placeholder="Phone Number"/>
          </div>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>KakaoID (optional)</label>
            <input type="text" placeholder="KakaoID"/>
          </div>
        </div>
    
        <div class="Portfolio-Configuration-section">
          <h2>Education & Skills</h2>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>Major</label>
            <input type="text" placeholder="Major"/>
          </div>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>Specialize / Interest</label>
            <input type="text" placeholder="Specialize/Interest"/>
          </div>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>Previous Semesters Average GPA</label>
            <input type="number" placeholder="GPA"/>
          </div>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>All Semesters GPA document</label>
            <p className="margin-bot">Attach your GPA scores here, obtained from all previous semesters.</p>
            <input type="file"/>
          </div>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>Skills & Expertise</label>
            <textarea className='Portfolio-Configuration-textarea' placeholder='Skills & Expertise'></textarea>
          </div>
        </div>
    
        <div class="Portfolio-Configuration-section">
          <h2 className='Portfolio-Configuration-h2'>Achievements & Experience</h2>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>Achievements (optional)</label>
            <input type="text" placeholder="Achievements"/>
          </div>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>Experiences (optional)</label>
            <div class="Portfolio-Configuration-experience">
              <div class="Portfolio-Configuration-form-group">
                <input type="text" placeholder="Experiences"/>
              </div>
            </div>
          </div>
          <div class="Portfolio-Configuration-form-group">
            <label className='Portfolio-Configuration-label'>Achievement Attachments (optional)</label>
            <p className ="margin-bot">Attach any documents you would like to show. Zip everything up</p>
            <input type="file"/>
          </div>
        </div>
    
        <div class="Portfolio-Configuration-section">
          <h2 className='Portfolio-Configuration-h2'>Personal Statement</h2>
          <div class="Portfolio-Configuration-form-group">
            <textarea className='Portfolio-Configuration-textarea' placeholder="Personal Statement"></textarea>
          </div>
        </div>
    
        <button class="Portfolio-Configuration-save-btn">Save Portfolio Changes</button>
      </div>
    </body>
    </div>
    </>
  )
}
export default PortfolioConfiguration;