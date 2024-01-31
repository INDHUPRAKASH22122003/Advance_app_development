// import React from 'react'
import './Home.css'
import Nav from "./Nav"
import Slider from "./Slider"
const Home = () => {
  return (
    <div>
        <Nav/>
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
             <button className='hbt1'>Get Started</button>
        </div></div>
        </div>
    </div>
  )
}

export default Home