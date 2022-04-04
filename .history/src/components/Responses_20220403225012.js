import React, { useState } from "react";
import { Link } from "react-router-dom";

const TableViewer = ({ data, filter }) => {
  // position: 'Full Stack Development',
  //           applyDate:"12-02-2022",
  //           jobLoc:"Valsad",
  //           jobres: '4',
  //           jobStatus: 'Pending'
  let filteredData = data.filter((element) => {
    return element.position.includes(filter) || element.openings.includes(filter) || element.jobLoc.includes(filter) || element.jobStatus.includes(filter) || element.jobres.includes(filter);
  });
  const uiObj = filteredData.map((element) => {
    return (
      <tr>
        <td scope='col'>
          <Link to={`/job`}>
            {element.position}
          </Link>
        </td>
        <td scope='col'>{element.openings}</td>
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
          <th scope='col'> Candidate </th>
          <th scope='col'> Resume Link </th>
          <th scope='col'> Rating </th>
          <th scope='col'> Percentage </th>
          <th scope='col'> Schedule Meeting </th>
        </tr>
      </thead>
      <br />
      {uiObj}
    </table>
  )
}
function Responses() {
  // const currentRole = useSelector(role);
  const [filter, setFilter] = useState("");
  const DummyData1 = [
    {
      jobname:"Full Stack Devlelopment",
      a: [{
        index: 1,
        candidate: 'Gracy Patel',
        resumelink: "link",
        rating: "5",
        percentage: '95%',
        schedulemeet: 'click'
      },
      {
        index: 2,
        candidate: 'Gracy Patel',
        resumelink: "link",
        rating: "5",
        percentage: '95%',
        schedulemeet: 'click'
      },
      {
        index: 3,
        candidate: 'Gracy Patel',
        resumelink: "link",
        rating: "5",
        percentage: '95%',
        schedulemeet: 'click'
      }
      ]
    },
    {
      jobname:"React Development",
      a:[{
        index: 1,
        candidate: 'Gracy Patel',
        resumelink: "link",
        rating: "5",
        percentage: '95%',
        schedulemeet: 'click'
      },
      {
        index: 2,
        candidate: 'Gracy Patel',
        resumelink: "link",
        rating: "5",
        percentage: '95%',
        schedulemeet: 'click'
      },
      {
        index: 3,
        candidate: 'Gracy Patel',
        resumelink: "link",
        rating: "5",
        percentage: '95%',
        schedulemeet: 'click'
      }
      ]
    }
  ]
  const DummyData = [

    {
      index: 1,
      position: 'Full Stack Development',
      openings: "10",
      jobLoc: "Valsad",
      jobres: '4',
      jobStatus: 'Pending'
    },
    {
      index: 2,
      position: 'Python Development',
      openings: "10",
      jobLoc: "Valsad",
      jobres: '4',
      jobStatus: 'Pending'
    },
    {
      index: 3,
      position: 'React Development',
      openings: "10",
      jobLoc: "Valsad",
      jobres: '4',
      jobStatus: 'Pending'
    },
    {
      index: 4,
      position: 'Front-end Development',
      openings: "10",
      jobLoc: "Valsad",
      jobres: '4',
      jobStatus: 'Pending'
    },
  ]
  if (true) {
    return (
      <div className="container-fluid">
        <div className='d-flex mb-3 justify-content-end align-items-center'>
        </div>
        <br />
        <div className='col-lg-11'>
          <h3 className='text-primary '>Responses</h3>
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
            {
              DummyData1.map((elem) => {
                return(
                  <div>
                    <h5>{elem.jobname}</h5>
                   <TableViewer data={DummyData} filter={filter} />
                   <br/>    
                  </div>
                )
              })
            }
            {/* <TableViewer data={DummyData} filter={filter} /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Responses
