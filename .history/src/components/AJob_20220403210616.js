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
function AJob() {
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
                <div className='col-lg-11'>
                    <h4>Engineer- Javascript Developer</h4>
                    <p className='bar pb-3'>Company - CVMate</p>
                    <br />
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>
        )
    }
}

export default AJob
