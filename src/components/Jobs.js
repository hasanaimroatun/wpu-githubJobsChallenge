import React from 'react'
import './CSS/style.css'
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
          <div className='col-4 sideNav'>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                Full time
              </label>
            </div>

            <form>
                <label for="location" class="form-label">LOCATION</label>
                <GoGlobe size='1.2em' color='#B9BDCF' className='iIcon'/>
                <input type="text" class="form-control" id="location" placeholder="City, state, zip code or country"/>
                <div className="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label class="form-check-label" for="flexRadioDefault1">
                    London
                  </label>
                </div>
                <div className="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label class="form-check-label" for="flexRadioDefault1">
                    Amsterdam
                  </label>
                </div>
            </form>
          </div>

          <div className='col-8'></div>
        </div>
    </div>
  )
}

export default Jobs