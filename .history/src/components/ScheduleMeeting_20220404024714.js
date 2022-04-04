import React, { useState } from "react";
import { Link } from "react-router-dom";
import { send } from 'emailjs-com';


function AddJobs() {
  // const currentRole = useSelector(role);

  const [toSend, setToSend] = useState({
    to_name: '',
    message: '',
    reply_to: '',
    from_name:'',
    meetinglink: ''
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_ui0m6mh',
      'template_0g09h4k',
      toSend,
      'G6dd3lLF3i9rUezed'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
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
           onSubmit={onSubmit}
        >

          <div className="form-group">
            <label class='form-label' for='form1Example1'>
              Google Meet Link
            </label>
            <input
              placeholder="Google Meet Ling eg. xyz-ysp-ert"
              class='form-control mb-4 p-2 w-100'
              name="meetinglink"
              value={toSend.meetinglink}
              onChange={handleChange}
              
            />
          </div>

          <div className="form-group">
            <label class='form-label' for='form1Example1'>
              Company Name
            </label>
            <input
              type="text"
              placeholder="Comapany Name ..."
              class='form-control mb-4 p-2 w-100'
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
              
            />
          </div>
          {/* reply_email */}

          <div className="form-group">
            <label class='form-label' for='form1Example1'>
              Candidate Email ID
            </label>
            <input
              type="text"
              placeholder="Candidate Email..."
              class='form-control mb-4 p-2 w-100'
              name="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
              
            />
          </div>

          {/* to_name */}

          <div className="form-group">
            <label class='form-label' for='form1Example1'>
              Candidate Name
            </label>
            <input
              type="text"
              placeholder="Candidate Name..."
              class='form-control mb-4 p-2 w-100'
              name="to_name"
              value={toSend.to_name}
              onChange={handleChange}
              
            />
          </div>

{/* Message */}
          <div className="form-group">
            <label class='form-label' for='form1Example1'>
              Message *(if any)
            </label>
            <input
              type="text"
              placeholder="Message... eg.Date and time"
              class='form-control mb-4 p-2 w-100'
              name="message"
              value={toSend.message}
              onChange={handleChange}
              
            />
          </div>
          <button type='submit' className="btn btn-primary p-3"> Submit </button>
        </form>

      </div>
    )
  }
}

export default AddJobs
