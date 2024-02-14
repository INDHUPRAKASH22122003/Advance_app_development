// import React from 'react'
import './Home.css'
import Nav1 from "./Nav1"
import Slider from "./Slider"
import {Link} from 'react-router-dom'
const Adhome = () => {
  return (
    <div>
        <Nav1/>
        <div className='whole'>
        <div className="home1"> <Slider/></div>
        <div className="start">
          <div className='st1'>
          <h1>WELCOME</h1><br></br>
          <p>Welcome to the ultimate birthday celebration experience! Dive into the world of effortless party planning with our user-friendly web application. From personalized invitations to seamless coordination, 
            we have got you covered. Say goodbye to stress and hello to unforgettable moments as you embark on a journey to create the perfect birthday event.
             Let the festivities begin – start organizing your dream celebration today!</p>
             <br>
             </br>
             <Link to="/addevents"><button className='hbt1'>Get Started</button></Link>
        </div></div>
        </div>
    </div>
  )
}

export default Adhome