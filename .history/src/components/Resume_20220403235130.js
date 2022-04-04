import React, { useState } from "react";
import { Link } from "react-router-dom";

function Resume() {
    if (true) {
        return (
            <div className="container-fluid">
                <div className='d-flex mb-3 justify-content-start align-items-center'>
                    <Link to="addjobs" className="btn btn-primary">
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
                <br/>
                    <p className="w-100 text-justify">
                        <h5>Objective</h5>
                        "Lorem ipsum dolor sit amet, commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                </div>
                <div>
                        <p><b>Skills</b></p>
                        <p>react flask python azure data-analysis c c++ </p>
                    </div>
                <div>
                    <h5>Experience</h5>
                    <p className="w-100 text-justify">
                    <b>Reacr front-end Developer </b>
                    Analysis, design and development of system components along with functional and development team<br/>
                    2. Analysis, design and development of system components along <br/>
                    3. Analysis, design and development of system components along with functional <br/>
                    4. Analysis, design and development of system components along with functional and development <br/>
                    </p>
                </div>
                <div>
                    <h5>Your Skills and Responsibility</h5>
                    <p className="w-100 text-justify">
                    1. Analysis, design and development of system components along with functional <br/>
                    2. Analysis, design and development of system components along <br/>
                    3. Analysis, design and development of system components along with functional and development <br/>
                    4. Analysis, design and development of system components along with team<br/>
                    </p>
                </div>
                <div>
                    <p className="mb-0"><b>Role : </b> Developer</p>
                    <p className="mb-0"><b>No. of Openings : </b> 10</p>
                    <p className="mb-0"><b>Stpend(*) : </b> 1000-3000</p>
                    <p className="mb-0"><b>Industry Type : </b> Banking</p>
                    <p className="mb-0"><b>Functional Area : </b> Engineering- Software</p>
                    <p className="mb-0"><b>Employment Type : </b> Full Time</p>
                    <p className="mb-0"><b>Role Category : </b> Software Development</p>
                </div>
            </div>
        )
    }
}

export default Resume
