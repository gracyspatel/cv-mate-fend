import React from "react";
import { NavLink } from "react-router-dom";

function SideNavBar(props) {
  console.log(props);
  return (
    <div className="">
      <div class='container-fluid' >
        <div class='row'>
          <div class='col-xl-2 min-vh-100 bg-light border border-top-0 d-flex' >
            <div class='container mt-1' style={{backgroundColor:"#fff"}}>
              <div class='row mt-3'>
                <NavLink
                  className='nav-item nw p-2'
                  activeClassName='text-primary'
                  to='/Dashboard'
                >
                  <i class='fas fa-home'></i> &nbsp; Dashboard
                </NavLink>
              </div>
              <div class='row mt-3'>
                <NavLink
                  className='nav-item nw p-2 '
                  activeClassName='text-primary'
                  to='/addjobs'
                >
                  <i class='fas fa-building'></i> &nbsp; Add Jobs
                </NavLink>
              </div>
              <div class='row mt-3'>
                <NavLink
                  className='nav-item nw p-2 '
                  activeClassName='text-primary'
                  to='/responses'
                >
                  <i class='fas fa-project-diagram'></i> &nbsp;Responses
                </NavLink>
              </div>
              <div class='row mt-3'>
                <NavLink
                  className='nav-item nw p-2 '
                  activeClassName='text-primary'
                  to='/schedulemeeting'
                >
                  <i class='fas fa-calendar-week'></i> &nbsp; Schedule Meeting
                </NavLink>
              </div>
            </div>
          </div>
          <div class='col-xl-10 min-vh-100 bg-light mt-5'>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default SideNavBar;
