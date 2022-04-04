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
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class='form-control mb-4 p-2 w-100'
                                    name="email"
                                    onChange={(e) => {
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class='form-control mb-4 p-2 w-100'
                                    name="email"
                                    onChange={(e) => {
                                    }}
                                />
                            </div><div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class='form-control mb-4 p-2 w-100'
                                    name="email"
                                    onChange={(e) => {
                                    }}
                                />
                            </div><div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class='form-control mb-4 p-2 w-100'
                                    name="email"
                                    onChange={(e) => {
                                    }}
                                />
                            </div><div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class='form-control mb-4 p-2 w-100'
                                    name="email"
                                    onChange={(e) => {
                                    }}
                                />
                            </div><div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class='form-control mb-4 p-2 w-100'
                                    name="email"
                                    onChange={(e) => {
                                    }}
                                />
                            </div><div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class='form-control mb-4 p-2 w-100'
                                    name="email"
                                    onChange={(e) => {
                                    }}
                                />
                            </div><div className="form-group">
                                <label class='form-label' for='form1Example1'>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class='form-control mb-4 p-2 w-100'
                                    name="email"
                                    onChange={(e) => {
                                    }}
                                />
                            </div>
                            
                            <div className="col-sm-2 ">
                            <button
                                type='submit'
                                class='btn btn-dark btn-block'
                                onClick={() => { }}
                            >
                                Sign in
                            </button>
                            </div>
                        </form>
                    
            </div>
        )
    }
}

export default ApplyJobs
