import React from 'react';

import './styling/LabSearch.css';

import search from '../icons/search.png'
import user from '../icons/person.png'

const LabSearch = () => {

  return (
    <div className="FreeComponentPage-wrapper">
      <div className='searchLabs'>
        <div className='search'>
          <form className="searchForm" name='searchForm' id='search' action='/action_page.php'>
            <div className='major'>
              <select name='majorName' id='majorName'>
                <option value="" selected>Major</option>
              </select>
              <select name='submajor' id='submajor'>
                <option value="" selected>Major Subcategory</option>
              </select>
            </div>
            <div className='options'>
              <div className='checkbox-container'>
                <label><p>Masters continuation required</p></label>
                <input type='checkbox' id='masters' name='masters' value="Masters"></input>
              </div>
              <div className='checkbox-container'>
                <label><p>Possible to work in English</p></label>
                <input type='checkbox' id='english' name='english' value="English"></input>
              </div>
              <div className='checkbox-container'>
                <label><p>Paid</p></label>
                <input type='checkbox' id='paid' name='paid' value="Paid"></input>
              </div>
            </div>
            <div className='searchIcon'>
              <img className='searchIconButton' src={search} alt='search icon'>
              </img>
            </div>
          </form>
        </div>
        <hr className='solid'></hr>
        <div className='results'>
          <ul id='list-container'>
            <li>
              <img src={user} alt='profile pic of professor'></img>
              <div class="professorDetails">
                <p>Professor Major</p>
                <p>Professor Submajor</p>
                <p>Professor Name</p>
              </div>
              <div class="labInfo">
                <p>Lab Description lorem ipsum waduup</p>
              </div>
              <div class="specificInfo one">
                <p>Masters Continuation</p>
                <p>Mandatory</p>
                <p>Language</p>
                <p>Korean</p>
              </div>
              <div class="specificInfo two">
                <p>Slots Available</p>
                <p>3/10</p>
                <p>Salary</p>
                <p>1억/h</p>
              </div>
              <button class="toggle" aria-expanded="false"></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LabSearch;