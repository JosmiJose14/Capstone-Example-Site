import React, { useState } from 'react';

export default function Appointments () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [expert, setExpert] = useState('');
  const [date, setDate] = useState('');
  const [interest, setInterest] = useState('Select an interest');

  
  return (
    <div id="container">
      <h2 class="headColor" style={{textAlign:'center'}}>Book your appoinments</h2>
    <form class="frmClass">
      <label>
        Name:
        <input type="text" value={name}  required  placeholder='ex : josmi'/>
      </label>
      <label>
        Email:
        <input type="email" value={email}  required placeholder='ex : josmi@ggg.fff'/>
      </label>
      <label>
        Message:
        <textarea value={message} />
      </label>
      <label>
        Select Services:
        <select value={interest}  required>
          <option disabled>Select a Service</option>
          <option value="Option 1">Service 1</option>
          <option value="Option 2">Service 2</option>
          <option value="Option 3">Service 3</option>
        </select>
      </label>
      <label>
        Service Expert:
        <input type="text" value={expert}  placeholder='ex : josmi'/>
      </label>
      <label>
        Date:
        <input type="Date" value={date}  required />
      </label>
      <input type="submit" value="Submit" id="buttons"  class="btnForm" style={{backgroundColor:' #e61158',width:'25%'}}/>
      <input type="reset" value="Reset" id="buttons" class="btnForm"  style={{width:'25%'}}/>
    </form>
    </div>
  );
};

