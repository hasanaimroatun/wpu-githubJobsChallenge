import React from 'react'
import img1 from './assets/backgroundImg.png'
import { MdAccessTime, MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import { GoGlobe } from 'react-icons/go'

function Cards() {
  return (
    <div>
        <div className="card mb-3 d-flex flex-row">
            
                <div className="imgContainer">
                    <img src={img1} className="img-fluid rounded-all" alt="..."/>
                </div>
                    <div className="card-body position-relative">
                        <p className="card-text">Kasisto</p>
                        <h5 className="card-title">Front-End Software Engineer</h5>
                        <button className="btn me-4">Full time</button>
                        <div className="locNTime d-flex">
                            <div className='loc me-5'>
                                <GoGlobe className='cIcon me-2'/>
                                New York
                            </div>
                            <div className='time'>
                                <MdAccessTime className='cIcon me-2'/>
                                5 days ago
                            </div>
                        </div>
                    </div>
                
            
        </div>

      <nav aria-label="Page navigation" className="pageinationContainer d-flex justify-content-end">
        <ul className="pagination d-flex gap-1">
          <li className="page-item">
            <a className="page-link" href="#1" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#1">
              <MdNavigateBefore color='#B9BDCF' className="pIcon"/>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="#1">1</a></li>
          <li className="page-item"><a className="page-link" href="#2">2</a></li>
          <li className="page-item"><a className="page-link" href="#3">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#3">
              	<MdNavigateNext color='#B9BDCF' className="pIcon"/>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#3" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Cards