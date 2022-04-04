import React, { useState } from "react";
import { Link } from "react-router-dom";

function Resume() {
    if (true) {
        return (
            <div className="container-fluid">
                <div className='d-flex mb-3 justify-content-start align-items-center'>
                    <Link to="responses" className="btn btn-primary">
                        <i class='fas fa-home'></i>
                    </Link>
                </div>
                <div className='col-lg-11'>
                    <h3 className='text-primary bar'>Resume</h3>
                    <p className='pb-3'>Checking the resume before selecting is a wize decision</p>
                </div>
                <div className='col-lg-11'>
                    <h4 className='bar'>Gracy Patel</h4>
                    <p className='pb-3'>Valsad, Gujarat ,India</p>
                    <div>
                    <p className="mb-0"><b>Contact No : </b> +917203051890</p>
                    <p className="mb-0"><b>Email : </b> gracyspatel@gmail.com</p>
                    <p className="mb-0"><b>Address : </b>2, R-Banglow, Jujwa Pathri, Tithal Faliya, Dharampur Road, Valsad</p>
                    <p className="mb-0"><b>Github Link : </b> https://github.com/gracyspatel</p>
                    <p className="mb-0"><b>Linked In link : </b>https://www.linkedin.com/in/gracy-patel-1144ba1b0/</p>
                    <p className="mb-0"><b>Profile Link : </b> https://gracyspatel.profile.com</p>
                </div>
                <br/><br/>
                    <p className="w-100 text-justify">
                        <h5>Objective</h5>
                        "Lorem ipsum dolor sit amet, commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                </div>
                <br/><br/>
                <div>
                        <h5>Skills</h5>
                        <p>react flask python azure data-analysis c c++ </p>
                    </div>
                <br/><br/>
                <div>
                    <h5>Experience</h5>
                    <p className="w-100 text-justify">
                    <b>React front-end Developer  :: Codise-us</b><br/><br/>
                    <p className="mb-0">Location : USA (Remote)</p>
                    <p className="mb-0">Duration : 6 months</p>
                    Analysis, design and development of system components along with functional and development team<br/>
                    </p>
                    <p className="w-100 text-justify">
                    <b>Full-stack Developer  :: Sinform</b><br/><br/>
                    <p className="mb-0">Location : USA (Remote)</p>
                    <p className="mb-0">Duration : 6 months</p>
                    Analysis, design and development of system components along with functional and development team<br/>
                    </p>
                </div>
                <br/><br/>
                <div>
                    <h5>Education</h5>
                    <p className="w-100 text-justify">
                    <b>Charusat University</b><br/><br/>
                    <p className="mb-0">Location : India</p>
                    <p className="mb-0">SGPA : 9.45</p>
                    <p className="mb-0">Study Focus : Computer Science and Engineering</p>
                    </p>
                    <p className="w-100 text-justify">
                    <b>Saraswati International School</b><br/><br/>
                    <p className="mb-0">Location : India</p>
                    <p className="mb-0">10 CGPA : 9.8 </p>
                    <p className="mb-0">12 Percentage : 88% </p>
                    Analysis, design and development of system components along with functional and development team<br/>
                    </p>
                </div>
                <br/><br/>
                <div>
                    <h5>Achievments</h5>
                    <p className="w-100 text-justify">
                    1. Analysis, design and development of system components along with functional <br/>
                    2. Analysis, design and development of system components along <br/>
                    3. Analysis, design and development of system components along with functional and development <br/>
                    4. Analysis, design and development of system components along with team<br/>
                    </p>
                </div>
                <br/><br/>
                <div>
                    <h5>Additional Information</h5>
                    <p className="w-100 text-justify">
                    "Lorem ipsum dolor sit amet, commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        
                    </p>
                </div>
                <br/><br/><br/>
            </div>
        )
    }
}

export default Resume
