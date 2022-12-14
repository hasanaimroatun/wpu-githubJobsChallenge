import React from 'react'
import './CSS/style.css'
import Cards from './Cards'
import JobsDetails from './JobsDetails'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { GoGlobe } from 'react-icons/go'

function Jobs() {
  return (
    <div>
        <div className='title'>Github <span>Jobs</span></div>
        <div className='heroImg'>
          <div className="input-group mb-3 position-absolute bottom-0 start-50 translate-middle">
            <MdOutlineWorkOutline size='1.2em' color='#B9BDCF' className='iIcon'/>
            <input type="text" className="form-control me-1" placeholder="Title, companies, expertise or benefits" aria-label="Title, companies, expertise or benefits" aria-describedby="button-addon2"/>
            <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4 col-sm-12 sideNav'>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Full time
              </label>
            </div>

            <form>
                <label htmlFor="location" className="form-label">LOCATION</label>
                <GoGlobe size='1.2em' color='#B9BDCF' className='iIcon'/>
                <input type="text" className="form-control" id="location" placeholder="City, state, zip code or country"/>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    London
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Amsterdam
                  </label>
                </div>
            </form>
          </div>

          <div className='col-md-8 col-sm-12'>
            <Cards />
          </div>
        </div>
        <JobsDetails />
        <div className="createdBy">created by <a href="https://github.com/hasanaimroatun/wpu-githubJobsChallenge.git">hasanaimroatun</a> - devChallenges.io</div>
    </div>
  )
}

export default Jobs