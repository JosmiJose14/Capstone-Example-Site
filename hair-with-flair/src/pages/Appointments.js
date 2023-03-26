import React from 'react';

export default function Appointments() {
  return (
    <div id="container" className='clsAppointments' >
      <div className='appointmentFrm sidepadding'>
        <h2 className='headColor' style={{ textAlign: 'center' }}>Book your appoinments</h2>
        <form className="frmClass">
          <label>
            Name:
            <input type="text" required placeholder='ex : josmi' />
          </label>
          <label>
            Email:
            <input type="email" required placeholder='ex : josmi@ggg.fff' />
          </label>
          <label>
            Message:
            <textarea />
          </label>
          <label>
            Select Services:
            <select required>
              <option disabled>Select a Service</option>
              <option value="Option 1">Service 1</option>
              <option value="Option 2">Service 2</option>
              <option value="Option 3">Service 3</option>
            </select>
          </label>
          <label>
            Service Expert:
            <input type="text" placeholder='ex : josmi' />
          </label>
          <label>
            Date:
            <input type="Date" required />
          </label>
          <div className='divButtons'>
            <input type="submit" value="Submit" id="buttons" className="btnForm" style={{ marginRight: '1%' }} />
            <input type="reset" value="Reset" id="buttons" className="btnForm" />
          </div>
        </form>
      </div>
      <div className='companyDetails'>
        <div className="containerAddress">
          <div className="hours">
            <h2 className='headColor' style={{ textAlign: 'center' }}>Business Hours</h2>
            <table className="tblHours">
              <tbody>
                <tr>
                  <th>Tuesday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th>Wednesday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th>Thursday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th>Friday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th>Saturday</th>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <th>Sunday</th>
                  <td>Closed</td>
                </tr>
                <tr>
                  <th>Monday</th>
                  <td>Closed</td>
                </tr>
                <tr>
                  <td colSpan={'2'}>
                    <small><em>All statutory holidays are closed. and tuesdays following a
                      holiday monday.</em></small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="divConnect">
          <h2 className='headColor' style={{ textAlign: 'center' }}>Contact Us</h2>
          <div className="details">
            <p>222 comox road</p>
            <p>
              <strong>Tel:</strong><a href="tel:1234567890">(250) 339-1858</a>
            </p>
            <p>
              <strong>Email:</strong><a href="mailto:xyz@shaw.ca">xyz@shaw.ca</a>
            </p>
            <p>
              <a href="contactus.html">
                Contact us today to book an appointment!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

