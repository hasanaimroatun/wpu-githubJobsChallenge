import React from 'react'
import './CSS/style.css'
import { MdOutlineWorkOutline } from 'react-icons/md'

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
    </div>
  )
}

export default Jobs