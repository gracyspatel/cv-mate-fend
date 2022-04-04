import React, { useState } from "react";
import { Link } from "react-router-dom";

const TableViewer = ({data,filter}) =>{
    let filteredData = data.filter((element) =>{
        return element.projName.includes(filter)|| element.projStatus.includes(filter);
    });
    const uiObj = filteredData.map((element) => {
        return(
            <tr>
                <td scope='col'>
                    <Link to={`view/project/${element.projName}`}>
                        {element.projName}
                    </Link>
                </td>
                <td scope='col'>{element.projStatus}</td>
                <td scope='col'>{element.projDoc}</td>
                <td scope='col'>{element}</td>
                <td scope='col'>{element}</td>
            </tr>
        )
    })
    return (
        <table style={{width:"100px"}}>
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
function AddJobs() {
    // const currentRole = useSelector(role);
    const [filter, setFilter] = useState("");
    const DummyData = [
        {
            position: 'Full Stack Development',
            jobLoc:"Valsad",
            jobres: '4',
            jobStatus: 'Pending'
        },
        {
            projName: 'Project 2',
            projStatus: 'Completed',
            projDoc: 'This Doc'
        },
        {
            projName: 'Project 3',
            projStatus: 'Pending',
            projDoc: 'This Doc'
        },
    ]
    if (true)
    {
        return (
            <div className="container-fluid">
                    <div className='d-flex justify-content-end align-items-center'>
                        <button
                            className='btn btn-outline-dark'
                        >
                            Apply Jobs
                        </button>
                    </div>
                <div className='col-lg-11'>
                    <h3 className='text-primary '>Posted Jobs</h3>
                    <p className='bar pb-3'>Company - CVMate</p>
                </div>
                <input 
                 type='search'
                 placeholder='filter'
                 className='form-control'
                 value={filter}
                 onChange={(e) => {
                setFilter(e.target.value);
                }}
                />
                <div className='row g-5 mt-1'>
                    <div className='col-lg-12'>
                        <TableViewer data={DummyData} filter={filter}/>
                    </div>
                </div>
            </div>
        )   
    }
}

export default AddJobs