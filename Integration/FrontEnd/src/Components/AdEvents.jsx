// import { useState } from "react";
// import Addtheme from "./Addtheme"
// import Nav1 from "./Nav1"
// import './ShowTheme.css'
// const ShowTheme = () => {
//   const[opentheme,setOpenTheme] = useState('');
//   const[formdata,setFormData] = useState(null);
//   const handleOpenTheme = () => {
//     setOpenTheme(true);
//   }
//   const handleCloseTheme = () => {
//     setOpenTheme(false);
//   }
//   const handleThemeCretae = (data) => {
//     setFormData(data)
//   }
//   return (
//     <div>
//         <Nav1/>
//         <div>
//           <button className="shts" onClick={handleOpenTheme}>Add Theme</button>
//         </div>
//         {opentheme && (
//           <Addtheme onEventCreate={handleThemeCretae} onClose={handleCloseTheme}/> 

//         )}
//         {formdata && (
//         <div className="formdata-card">
//           <p>Name: {formdata.url}</p>
//           <p>Theme: {formdata.theme}</p>
//           <p>Price: {formdata.price}</p>
//           <p>Rating: {formdata.rating}</p>
//           <p>Videographer: {formdata.video}</p>
//         </div>
//       )}

// <div className="sth1">
//       <div className="sresponsive">
//         <div className="sgallery">
//           <a href="/showtheme">
//             <img src="https://www.i-eventplanner.com/wp-content/uploads/2018/07/Birthday-Party-planner.jpg" className="simgs" alt="Cinque Terre" width="600" height="400" />
//           </a>
//           <div className="sdesc">
//             <p>CUSTOMIZED DECORATIONS </p>
//             <p>RATING : 4.5</p>
//             <p>Rs. 12,000</p>
//           </div>
//         </div>
//       </div>

//       <div className="sresponsive">
//         <div className="sgallery">
//           <a href="/showtheme">
//             <img src="https://i.pinimg.com/736x/a6/23/d6/a623d65f74e4219ee8afcaeecb1afe64.jpg" className="simgs" alt="Forest" width="600" height="400" />
//           </a>
//           <div className="sdesc">
//           <p>PREMIUM BIRTHDAY DECORATIONS</p>
//             <p>RATING : 4.7</p>
//             <p>Rs. 20,000</p>
//           </div>
//         </div>
//       </div>

//       <div className="sresponsive">
//         <div className="sgallery">
//           <a href="/showtheme">
//             <img src="https://m.media-amazon.com/images/I/61ZydNtZgoL._AC_UF894,1000_QL80_.jpg" className="simgs" alt="Northern Lights" width="600" height="400" />
//           </a>
//           <div className="sdesc">
//             <p>BACKDROP THEME DECORATIONS </p>
//             <p>RATING : 4.6</p>
//             <p>Rs. 15,000</p>
//           </div>
//         </div>
//       </div>

//       <div className="sresponsive">
//         <div className="sgallery">
//           <a href="/showtheme">
//             <img src="https://prepare2party.in/wp-content/uploads/2022/06/Terrace-Birthday-Decoration-2.jpeg" className="simgs" alt="Mountains" width="600" height="400" />
//           </a>
//           <div className="sdesc">
//             <p>HOME BALLON DECORATIONS</p>
//             <p>RATING : 4.4</p>
//             <p>Rs. 8,000</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default ShowTheme



import React from 'react'
import './Theme.css';
import './AdEvents.css'; 
import { AddCircle} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { useState,useEffect} from 'react';
import EventBox from './EventBox';
import AdEventsBox from './AdEventsBox';
import AdUpEventBox from './AdUpEventBox';
import AdDelEventBox from './AdDelEventBox';
import axios from 'axios';
import Nav1 from './Nav1';
function AdEvents() {

  const[open1,setOpen] = useState('');
  const[open3,setOpen3] = useState('');
  const[open2,setOpen2] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventName1, setEventName1] = useState('');
  
  const handleOpen = (eventName) => {
      setOpen(true);
      setEventName(eventName);
  }

  const handleClose = () => {
      setOpen(false);
  }

  
  const handleOpen2 = () => {
      setOpen2(true);
  }
  const handleOpen3 = (eventName1) => {
      setEventName1(eventName1);
      setOpen3(true);
  }
  const handleClose1 = () => {
      setOpen3(false);
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/events")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const filteredEvents = data.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search submission (e.g., send search query to the server)
    console.log('Search term submitted:', searchTerm);
  };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    return (
      <div className="be-overall">
      <div className='home-b'>
        <Nav1/>
        <div className='ad-h1'>
            <h2>Manage your Themes:</h2>
        </div>
        <form className="ad-search-form" onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Type here to Search...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button" type="submit">
          <b>Search</b>
        </button>
      </form>
      <div className='ad-add'>
            <div className="ad-pointer" onClick={handleOpen2}>
            <AddCircle style={{ fontSize: 35, marginTop:0 }}/><h2 className='ad-poih'>Add Themes</h2>
      </div> 
      </div>    
        {/* {open2 && (<AdEventsBox />)} */}

      {filteredEvents.length === 0 && (
      <div className="be-none">
        <img className="be-noevents" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
        <h3>Oops! No Events for Now...</h3>
        <p>Use this space for managing your events!</p>
      </div>
        )}
      
        <br></br><br></br>
        

        <div className='be-grid1'>
        {filteredEvents.map(event => (
          <div key={event.id}>
            <section className="pb-51">
        
            <div className="container text-center" >
            <div className="gallery-wrapper1">
                <div className="grid-sizer col-lg-4 col-md-6"></div>

                <div className="col-lg-4 col-md-6 grid-item1 mb-4">
                <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src={event.image} alt="" />
                <h2 className="h4">{event.name}</h2>
                <p className="small text-muted font-italic">Theme cost: Rs. {event.price}</p>
                <p className="small text-muted font-italic">Rating: {event.rating}</p>
                <p className="small text-muted font-italic">Photographer Status: {event.photographer}</p>
                <p className="small text-muted font-italic">Description: {event.description}</p>
                <button onClick={() => handleOpen3(event.name)} className='ab-up'>Update</button><button onClick={() => handleOpen(event.name)} className='ab-del'>Delete</button>
                </div>

            </div>
            </div>
        </section> 
       </div>
       ))}
       {open1 && (<AdDelEventBox eventName={eventName} handleClose={handleClose} />)} 
        {open3 && (<AdUpEventBox eventName1={eventName1} handleClose1={handleClose1}/>)} 
        {open2 && (<AdEventsBox />)}
            

        
        </div>
      <br></br>
        </div>
       
        
      </div>
  )
}

export default AdEvents