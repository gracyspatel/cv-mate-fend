import React, { useState } from "react";
import { Link } from "react-router-dom";

const TableViewer = ({data,filter}) =>{
  // position: 'Full Stack Development',
  //           applyDate:"12-02-2022",
  //           jobLoc:"Valsad",
  //           jobres: '4',
  //           jobStatus: 'Pending'
    let filteredData = data.filter((element) =>{
        return element.position.includes(filter)|| element.jobLoc.includes(filter) || element.jobStatus.includes(filter) || element.jobres.includes(filter);
    });
    const uiObj = filteredData.map((element) => {
        return(
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
            index:1,
            position: 'Full Stack Development',
            applyDate:"12-02-2022",
            jobLoc:"Valsad",
            jobres: '4',
            jobStatus: 'Pending'
        },
        {
          index:2,
          position: 'Python Development',
          applyDate:"12-02-2022",
          jobLoc:"Valsad",
          jobres: '4',
          jobStatus: 'Pending'
        },
        {
          index:3,
          position: 'React Development',
          applyDate:"12-02-2022",
          jobLoc:"Valsad",
          jobres: '4',
          jobStatus: 'Pending'
        },
        {
          index:4,
          position: 'Front-end Development',
          applyDate:"12-02-2022",
          jobLoc:"Valsad",
          jobres: '4',
          jobStatus: 'Pending'
        },
    ]
    if (true)
    {
        return (
            <div className="container-fluid">
                    <div className='d-flex justify-content-end align-items-center'>
                    <Link to={`view/job`}>
                        Apply for Jobs
                    </Link>
                          
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
