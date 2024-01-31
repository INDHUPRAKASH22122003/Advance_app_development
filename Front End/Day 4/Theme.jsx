import Nav from "./Nav"
import "./Theme.css"
const Theme = () => {
  return (
    <div>
        <Nav/>
      <div className="th1">
      <div className="responsive">
        <div className="gallery">
          <a href="/form">
            <img src="https://www.i-eventplanner.com/wp-content/uploads/2018/07/Birthday-Party-planner.jpg" className="imgs" alt="Cinque Terre" width="600" height="400" />
          </a>
          <div className="desc">
            <p>CUSTOMIZED DECORATIONS </p>
            <p>RATING : 4.5</p>
            <p>Rs. 12,000</p>
          </div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a href="/form">
            <img src="https://i.pinimg.com/736x/a6/23/d6/a623d65f74e4219ee8afcaeecb1afe64.jpg" className="imgs" alt="Forest" width="600" height="400" />
          </a>
          <div className="desc">
          <p>PREMIUM BIRTHDAY DECORATIONS</p>
            <p>RATING : 4.7</p>
            <p>Rs. 20,000</p>
          </div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a href="/form">
            <img src="https://m.media-amazon.com/images/I/61ZydNtZgoL._AC_UF894,1000_QL80_.jpg" className="imgs" alt="Northern Lights" width="600" height="400" />
          </a>
          <div className="desc">
            <p>BACKDROP THEME DECORATIONS </p>
            <p>RATING : 4.6</p>
            <p>Rs. 15,000</p>
          </div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a href="/form">
            <img src="https://prepare2party.in/wp-content/uploads/2022/06/Terrace-Birthday-Decoration-2.jpeg" className="imgs" alt="Mountains" width="600" height="400" />
          </a>
          <div className="desc">
            <p>HOME BALLON DECORATIONS</p>
            <p>RATING : 4.4</p>
            <p>Rs. 8,000</p>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>
    </div></div>
  )
}

export default Theme