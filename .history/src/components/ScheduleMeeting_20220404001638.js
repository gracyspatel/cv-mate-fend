import React, { useState } from "react";
import { Link } from "react-router-dom";
function AddJobs() {
    // const currentRole = useSelector(role);
    if (true)
    {
        return (
            <div className="container-fluid">
                    <div className='d-flex mb-3 justify-content-end align-items-center'>
                    <Link to="applyjobs" className="btn btn-primary">
                        Apply for Jobs
                    </Link>
                          
                    </div>
                <div className='col-lg-11'>
                    <h3 className='text-primary '>Posted Jobs</h3>
                    <p className='bar pb-3'>Company - CVMate</p>
                </div>
                
            </div>
        )   
    }
}

export default AddJobs
