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
                    <p className="mb-0"><b>Stpend(*) : </b> 1000-3000</p>
                    <p className="mb-0"><b>Industry Type : </b> Banking</p>
                    <p className="mb-0"><b>Functional Area : </b> Engineering- Software</p>
                    <p className="mb-0"><b>Employment Type : </b> Full Time</p>
                    <p className="mb-0"><b>Role Category : </b> Software Development</p>
                </div>
                    <p className="w-100 text-justify">
                        <h5>JOB DESCRIPTION</h5>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                <div>
                        <p><b>Key Skills</b></p>
                        <p>react flak python awzure </p>
                    </div>
                <div>
                    <h5>Key Responsiblity</h5>
                    <p className="w-100 text-justify">
                    1. Analysis, design and development of system components along with functional and development team<br/>
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
