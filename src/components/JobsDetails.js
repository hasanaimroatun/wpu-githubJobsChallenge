import React from 'react'
import { MdAccessTime, MdArrowRightAlt } from 'react-icons/md'
import img1 from './assets/backgroundImg.png'
import { GoGlobe } from 'react-icons/go'

function JobsDetails() {
  return (
    <div className="position-absolute detailsContainer none" id="details">
        <div className="row">
            <div className="col-md-3">
                <div className="title">Github <span>Jobs</span></div>
                <div className="back"><MdArrowRightAlt color="#1E86FF" size='1.5em' className="bIcon"/>  Back to search</div>
                <div className="subTitle">HOW TO APPLY</div>
                <div className="email">
                    Please email a copy of your resume and online portfolio to <a href="#a">wes@kasisto.com</a> & CC <a href="#a">eric@kasisto.com</a>
                </div>
            </div>
            <div className="col-md-9">
                <div className="position me-4">Front-End Software Engineer</div>
                <button className="btn">Full time</button>
                <div className='time'>
                    <MdAccessTime className='cIcon me-2'/>
                    5 days ago
                </div>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-2 imgContainer">
                            <img src={img1} className="img-fluid rounded-all" alt="..."/>
                        </div>
                        <div className="col-10">
                            <div className="card-body position-relative">
                                <p className="card-text">Kasisto</p>
                                <div className='loc me-5'>
                                    <GoGlobe className='cIcon me-2'/>
                                    New York
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="announcement">
                    Humanizing Digital Experiences®
                    <br/><br/>
                    Kasisto’s Digital Experience Platform, KAI, is designed for financial institutions to deliver the industry’s most amazing Conversational AI powered intelligent virtual assistants to their customers. KAI is open and extensible, and also fluent in the language of banking and finance. From simple retail transactions to the complex demands of corporate banks and wealth management, financial institutions can deliver meaningful digital interactions with KAI that help build their digital brand.
                    <br/><br/>
                    Financial institutions around the world use KAI, including DBS Bank, J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife Bank among others. They chose KAI for its proven track record to drive business results while improving customer experiences. The platform is used by millions of consumers around the world, all the time, across multiple channels, in different languages, and is optimized for performance, scalability, security, and compliance.
                    <br/><br/>
                    This position
                    <br/><br/>
                    We are looking for a Full-Stack, client side software engineer to help build and integrate responsive chat interfaces, analytics dashboards and reporting tools.
                    <br/><br/>
                    What you’ll be doing
                    <br/><br/>
                    Working closely with clients and internal engineering, product and design teams to gather requirements Building and integrating front-end applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack, Handlebars.js, LESS, Backbone, Python, Django and Java Working to improve user experience and functionality for tools Writing testable code utilizing common front-end unit and BDD testing frameworks What you need for this position
                    <br/><br/>
                    3+ years in client-side web development with CSS, HTML, Javascript and jQuery Proven, full-stack front-end experience using Python and Django Other Modern Web Framework(s) experience is a plus (React, Vue, Angular, Ember) Experience working collaboratively to build scalable, modular, production software in an Agile environment Experience using RESTful json services Node.js and API development familiarity is plus D3.js is a plus
                    <br/><br/>
                    What we offer:
                    <br/><br/>
                    Competitive compensation package Ground floor opportunity within rapidly growing tech startup Great collaborative team environment Full Benefits Fun perks
                    <br/><br/>
                    Location - NYC, Flatiron District
                    <br/><br/>
                    We welcome your cover letter with a description of your previous complete experience and your resume. Applicants must be authorized to work in the US as we are unable to sponsor. Kasisto is an equal opportunity employer.
                </p>
            </div>
        </div>
        <div className="createdBy">created by <a href="https://github.com/hasanaimroatun/wpu-githubJobsChallenge.git">hasanaimroatun</a> - devChallenges.io</div>
    </div>
  )
}

export default JobsDetails