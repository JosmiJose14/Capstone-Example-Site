import React, { useState } from 'react';

export default function Appointments () {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [expert, setExpert] = useState('');
  // const [date, setDate] = useState('');
  // const [interest, setInterest] = useState('Select an interest');

  
  return (
    <div id="container">
      <h2 className='headColor' style={{textAlign:'center'}}>Book your appoinments</h2>
    <form className="frmClass">
      <label>
        Name:
        <input type="text"  required  placeholder='ex : josmi'/>
      </label>
      <label>
        Email:
        <input type="email"  required placeholder='ex : josmi@ggg.fff'/>
      </label>
      <label>
        Message:
        <textarea  />
      </label>
      <label>
        Select Services:
        <select  required>
          <option disabled>Select a Service</option>
          <option value="Option 1">Service 1</option>
          <option value="Option 2">Service 2</option>
          <option value="Option 3">Service 3</option>
        </select>
      </label>
      <label>
        Service Expert:
        <input type="text"  placeholder='ex : josmi'/>
      </label>
      <label>
        Date:
        <input type="Date"  required />
      </label>
      <input type="submit" value="Submit" id="buttons"  className="btnForm" style={{width:'25%'}}/>
      <input type="reset" value="Reset" id="buttons" className="btnForm"  style={{width:'25%'}}/>
    </form>
    </div>
  );
};

