import { useState } from "react";
import Addtheme from "./Addtheme"
import Nav1 from "./Nav1"
import './ShowTheme.css'
const ShowTheme = () => {
  const[opentheme,setOpenTheme] = useState('');
  const[formdata,setFormData] = useState(null);
  const handleOpenTheme = () => {
    setOpenTheme(true);
  }
  const handleCloseTheme = () => {
    setOpenTheme(false);
  }
  const handleThemeCretae = (data) => {
    setFormData(data)
  }
  return (
    <div>
        <Nav1/>
        <div>
          <button className="shts" onClick={handleOpenTheme}>Add Theme</button>
        </div>
        {opentheme && (
          <Addtheme onEventCreate={handleThemeCretae} onClose={handleCloseTheme}/> 

        )}
        {formdata && (
        <div className="formdata-card">
          <p>Name: {formdata.name}</p>
          <p>Theme: {formdata.theme}</p>
          <p>Price: {formdata.price}</p>
          <p>Rating: {formdata.rating}</p>
          <p>Videographer: {formdata.video}</p>
        </div>
      )}

<div className="sth1">
      <div className="sresponsive">
        <div className="sgallery">
          <a href="/showtheme">
            <img src="https://www.i-eventplanner.com/wp-content/uploads/2018/07/Birthday-Party-planner.jpg" className="simgs" alt="Cinque Terre" width="600" height="400" />
          </a>
          <div className="sdesc">
            <p>CUSTOMIZED DECORATIONS </p>
            <p>RATING : 4.5</p>
            <p>Rs. 12,000</p>
          </div>
        </div>
      </div>

      <div className="sresponsive">
        <div className="sgallery">
          <a href="/showtheme">
            <img src="https://i.pinimg.com/736x/a6/23/d6/a623d65f74e4219ee8afcaeecb1afe64.jpg" className="simgs" alt="Forest" width="600" height="400" />
          </a>
          <div className="sdesc">
          <p>PREMIUM BIRTHDAY DECORATIONS</p>
            <p>RATING : 4.7</p>
            <p>Rs. 20,000</p>
          </div>
        </div>
      </div>

      <div className="sresponsive">
        <div className="sgallery">
          <a href="/showtheme">
            <img src="https://m.media-amazon.com/images/I/61ZydNtZgoL._AC_UF894,1000_QL80_.jpg" className="simgs" alt="Northern Lights" width="600" height="400" />
          </a>
          <div className="sdesc">
            <p>BACKDROP THEME DECORATIONS </p>
            <p>RATING : 4.6</p>
            <p>Rs. 15,000</p>
          </div>
        </div>
      </div>

      <div className="sresponsive">
        <div className="sgallery">
          <a href="/showtheme">
            <img src="https://prepare2party.in/wp-content/uploads/2022/06/Terrace-Birthday-Decoration-2.jpeg" className="simgs" alt="Mountains" width="600" height="400" />
          </a>
          <div className="sdesc">
            <p>HOME BALLON DECORATIONS</p>
            <p>RATING : 4.4</p>
            <p>Rs. 8,000</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ShowTheme