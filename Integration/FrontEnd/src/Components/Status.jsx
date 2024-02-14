import React from 'react' 
import './Theme.css'; 
import { useState,useEffect} from 'react';
import './Status.css'
import axios from 'axios';
import DelUser from './DelUser';
import Nav1 from './Nav1'
function Status() {

  const[open1,setOpen1] = useState('');

  const [eventName, setEventName] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');
 
  const handleOpen1 = (eventName,name,id) => {
    setOpen1(true);
    setEventName(eventName);
    setName(name);
    setId(id);
}

  const handleClose1 = () => {
    setOpen1(false);
}


  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/book")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const handleStatusChange = async (eventId, status) => {
    console.log("Updating status for event ID:", eventId);
    console.log("New status:", status);
    try {
        await axios.put(`http://localhost:8080/book/update/${eventId}`, status, {
            headers: {
                'Content-Type': 'text/plain'
            }
        });
        window.location.href="/Status";
        alert("Booking Status Updated Successfully!");
        console.log("Booking status updated successfully!");
    } catch (error) {
        console.error("Error updating booking status:", error);
        alert("Updating Booking Status Failed...Please Try Again!");
    }
}

  const filteredEvents = data;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div className="be-overall">
      <div className='home-b'>
        <Nav1/>
        <div className='be-h1'>
            <h2>View Booked & Past Events:</h2>
        </div>
       
        {filteredEvents.length === 0 && (
      <div className="be-none">
        <img className="be-noevents1" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
        <h3>Oops! No Booked or Past Events available for Now...</h3>
        <p>Book your Awesome events now!</p>
      </div>
        )}

      
        <br></br><br></br><br></br>

        {filteredEvents.length!==0 && (
         
         <table className='tab11'>
        <thead>
          <tr>
            <th className='th11'>Applicant Name</th>
            <th className='th11'>Event Name</th>
            <th className='th11'>Applicant Mobile</th>
            <th className='th11'>Event Date</th>
            <th className='th11'>Event Time</th>
            <th className='th11'>Total Price</th>
            <th className='th11'>Booking Status</th>
            <th className='th11'>Actions</th>
          </tr>
        </thead>
        <tbody>
             {filteredEvents.map(event => (
            <tr key={event.id}>
              <td className='td11'>{event.name}</td>
              <td className='td11'>{event.ename}</td>
              <td className='td11'>{event.mobile}</td>
              <td className='td11'>{event.date}</td>
              <td className='td11'>{event.time}</td>
              <td className='td11'>Rs. {event.price}</td>
              <td className='td11'>

              <select
                      value={event.status}
                      onChange={(e) => {
                        handleStatusChange(event.id, e.target.value);
                      }}
                      className={event.status.toLowerCase() === 'pending' ? 'pe1' : event.status.toLowerCase() === 'confirmed' ? 'con1' : 're1'}
                    >
                      <option className="drop" value="Pending">Pending</option>
                      <option className="drop" value="Confirmed">Confirmed</option>
                      <option className="drop" value="Rejected">Rejected</option>
                    </select>
              </td>
              <td className='td11'>
              <img onClick={() => handleOpen1(event.ename,event.name,event.id)} className="ve-img211" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img>
              </td>
            </tr>
            ))}
              {open1 && (<DelUser eventName={eventName} name={name} id={id} handleClose1={handleClose1}/>)} 

            {/* <button className={event.status.toLowerCase() === 'pending' ? 'pe' : event.status.toLowerCase() === 'confirmed' ? 'con' : 're'}>{event.status}</button> */}
      
        </tbody>
       </table>
       )}


      <br></br><br></br> <br></br> <br></br>
        </div>
       
        
      </div>
  )
}

export default Status