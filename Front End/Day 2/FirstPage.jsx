import "./FirstPage.css"
import { Link } from "react-router-dom"
const FirstPage = () => {
  return (
    <div>
        <div className='ft1'>
            <div className="ft2">
                <h2>Welcome to Super Star Birthday Club!</h2><br></br>
                <p>Discover unforgettable celebrations with our web app. From e-cards to party ideas, we're here to make every birthday special!</p>
                <Link to="/adlogin"><button className="ft3">Admin</button></Link>
                <Link to="/login"><button className="ft4">User</button></Link>
            </div>
        </div>
    </div>
  )
}

export default FirstPage