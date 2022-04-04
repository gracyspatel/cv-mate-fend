import React, { useState } from "react";
import { Link } from "react-router-dom";
function AddJobs() {
  // const currentRole = useSelector(role);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  if (true) {
    return (
      <div className="container-fluid">
        <div className='d-flex mb-3 justify-content-end align-items-center'>
        </div>
        <div className='col-lg-11'>
          <h3 className='text-primary '>Schedule Meeting</h3>
          <p className='bar pb-3'>Company - CVMate</p>
        </div>

        {/* <button className="btn btn-primary p-3 mb-4" onclick="window.open('https://meet.google.com/')">Google Meet</button> */}
        <a className="btn btn-primary p-3 mb-4" href="https://meet.google.com/" target="_blank">Google Meet</a>

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

        <form onSubmit={onSubmit}>
  <input
    type='text'
    name='from_name'
    placeholder='from name'
    value={toSend.from_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='to_name'
    placeholder='to name'
    value={toSend.to_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />
  <input
    type='text'
    name='reply_to'
    placeholder='Your email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <button type='submit'>Submit</button>
</form>

      </div>
    )
  }
}

export default AddJobs
