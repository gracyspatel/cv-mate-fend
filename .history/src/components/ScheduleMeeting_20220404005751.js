import React, { useState } from "react";
import { Link } from "react-router-dom";
function AddJobs() {
  // const currentRole = useSelector(role);
  if (true) {
    return (
      <div className="container-fluid">
        <div className='d-flex mb-3 justify-content-end align-items-center'>
        </div>
        <div className='col-lg-11'>
          <h3 className='text-primary '>Schedule Meeting</h3>
          <p className='bar pb-3'>Company - CVMate</p>
        </div>

        <form
        // onSubmit={(e) => {
        //     e.preventDefault();
        // }}
        >

          <div className="form-group">
            <label class='form-label' for='form1Example1'>
              Google Meet Link
            </label>
            <input

              placeholder="Google Meet Ling eg. xyz-ysp-ert"
              class='form-control mb-4 p-2 w-100'
              name="meetlink"
              onChange={(e) => {
              }}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default AddJobs
