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
            </tr>
        )
    })
    return (
        <table>
            <thead>
            <tr>
                <th scope='col'> Project Name </th>
                <th scope='col'> Project Status</th>
                <th scope='col'> Documents </th>
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
            projName: 'Project 1',
            projStatus: 'Pending',
            projDoc: 'This Doc'
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
              <div className='row'>
                    <div className='col-lg-11 d-flex justify-content-end align-items-center'>
                        <button
                            className='btn btn-outline-dark'
                        >
                            Apply Leave
                        </button>
                    </div>
                </div>
                <div className='col-lg-11 pt-5'>
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
