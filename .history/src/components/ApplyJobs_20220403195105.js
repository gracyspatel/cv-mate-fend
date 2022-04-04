import React, { useState } from "react";
import { Link } from "react-router-dom";

const TableViewer = ({ data, filter }) => {
    // position: 'Full Stack Development',
    //           applyDate:"12-02-2022",
    //           jobLoc:"Valsad",
    //           jobres: '4',
    //           jobStatus: 'Pending'
    let filteredData = data.filter((element) => {
        return element.position.includes(filter) || element.jobLoc.includes(filter) || element.jobStatus.includes(filter) || element.jobres.includes(filter);
    });
    const uiObj = filteredData.map((element) => {
        return (
            <tr>
                <td scope='col'>
                    <Link to={`view/job`}>
                        {element.position}
                    </Link>
                </td>
                <td scope='col'>{element.applyDate}</td>
                <td scope='col'>{element.jobLoc}</td>
                <td scope='col'>{element.jobres}</td>
                <td scope='col'>{element.jobStatus}</td>
            </tr>
        )
    })
    return (
        <table style={{ width: "100px" }}>
            <thead>
                <tr>
                    <th scope='col'> Postiton </th>
                    <th scope='col'> Applied on</th>
                    <th scope='col'> Location </th>
                    <th scope='col'> No of Responses </th>
                    <th scope='col'> Status </th>
                </tr>
            </thead>
            <br />
            {uiObj}
        </table>
    )
}
function ApplyJobs() {
    // const currentRole = useSelector(role);
    const [filter, setFilter] = useState("");
    const DummyData = [
        {
            index: 1,
            position: 'Full Stack Development',
            applyDate: "12-02-2022",
            jobLoc: "Valsad",
            jobres: '4',
            jobStatus: 'Pending'
        },
        {
            index: 2,
            position: 'Python Development',
            applyDate: "12-02-2022",
            jobLoc: "Valsad",
            jobres: '4',
            jobStatus: 'Pending'
        },
        {
            index: 3,
            position: 'React Development',
            applyDate: "12-02-2022",
            jobLoc: "Valsad",
            jobres: '4',
            jobStatus: 'Pending'
        },
        {
            index: 4,
            position: 'Front-end Development',
            applyDate: "12-02-2022",
            jobLoc: "Valsad",
            jobres: '4',
            jobStatus: 'Pending'
        },
    ]
    if (true) {
        return (
            <div className="container-fluid">
                <div className='d-flex mb-3 justify-content-start align-items-center'>
                    <Link to="addjobs" className="btn btn-primary">
                        <i class='fas fa-home'></i>
                    </Link>
                </div>
                <div className='col-lg-11'>
                    <h3 className='text-primary '>Posted Jobs</h3>
                    <p className='bar pb-3'>Company - CVMate</p>
                </div>
                        <form
                        // onSubmit={(e) => {
                        //     e.preventDefault();
                        // }}
                        >
         
                            <div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Job Title
                                </label>
                                <input
                                    
                                    placeholder="Job Title.."
                                    class='form-control mb-4 p-2 w-100'
                                    name="jobtitle"
                                    onChange={(e) => {
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Job Description
                                </label>
                                <input
                                    
                                    placeholder="Job Description.."
                                    class='form-control mb-4 p-2 w-100'
                                    name="job_jobdesc"
                                    onChange={(e) => {
                                    }}
                                />
                            </div>
                            {/* company_name */}
                            <div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Company Name
                                </label>
                                <input
                                    
                                    placeholder="Company Name.."
                                    class='form-control mb-4 p-2 w-100'
                                    name="company_name"
                                    onChange={(e) => {
                                    }}
                                />
                            </div>

                            {/* job_experence */}
                            <div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Job Experience
                                </label>
                                <input
                                    
                                    placeholder="Job Experience.."
                                    class='form-control mb-4 p-2 w-100'
                                    name="job_experence"
                                    onChange={(e) => {
                                    }}
                                />
                            </div>
                            {/* job_loc */}
                            <div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Job Location
                                </label>
                                <input
                                    
                                    placeholder="Job Location.."
                                    class='form-control mb-4 p-2 w-100'
                                    name="job_loc"
                                    onChange={(e) => {
                                    }}
                                />
                            </div>
                            {/* openings */}
                            <div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Job Openings
                                </label>
                                <input
                                    
                                    placeholder="Job Openings.."
                                    class='form-control mb-4 p-2 w-100'
                                    name="openings"
                                    onChange={(e) => {
                                    }}
                                />
                            </div>
                            {/* job_role */}
                            <div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Job Role
                                </label>
                                <input
                                    
                                    placeholder="Job Role.."
                                    class='form-control mb-4 p-2 w-100'
                                    name="job_rate "
                                    onChange={(e) => {
                                    }}
                                />
                            </div>
                            {/* employment_type */}
                            <div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Employment Type
                                </label>
                                <input
                                    
                                    placeholder="Job Role.."
                                    class='form-control mb-4 p-2 w-100'
                                    name="job_rate "
                                    onChange={(e) => {
                                    }}
                                />
                            </div>
                            {/* job_stipend */}
                            <div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Stipend
                                </label>
                                <input
                                    
                                    placeholder="Job Stipend.."
                                    class='form-control mb-4 p-2 w-100'
                                    name="job_stipend"
                                    onChange={(e) => {
                                    }}
                                />
                            </div>
                            {/* desc */}
                            <div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Additional Information
                                </label>
                                <input
                                    
                                    placeholder="Additional Information.."
                                    class='form-control mb-4 p-2 w-100'
                                    name="desc"
                                    onChange={(e) => {
                                    }}
                                />
                            </div>
                            {/* avtar */}
                            <div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Avtar
                                </label>
                                <input
                                    
                                    placeholder="Avtar.."
                                    class='form-control mb-4 p-2 w-100'
                                    name="avtar"
                                    onChange={(e) => {
                                    }}
                                />
                            </div>
                            {/* dateofapplication */}
                
                            <div className="col-lg-3 d-flex ">
                            <button
                                type='submit'
                                class='btn btn-dark btn-block m-2'
                                onClick={() => { }}
                            >
                                Post
                            </button>
                            {" "}
                            <button
                                type='submit'
                                class='btn btn-dark btn-block m-2'
                                onClick={() => { }}
                            >
                                Reset
                            </button>
                            </div>
                        </form>
                    
            </div>
        )
    }
}

export default ApplyJobs
