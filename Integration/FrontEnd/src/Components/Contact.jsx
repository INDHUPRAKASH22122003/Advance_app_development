import Nav from "./Nav"
import "./Contact.css"
const Contact = () => {
  return (
    <div>
        <Nav/>
        <div className="Ad">
            <div className="adrs">
                <p>Reach Us At</p>
                <p><span>&#9742;</span>+91-9345404807</p>
                <p><span>&#128231;</span>indhuprakashtm@gmail.com</p>
                <p><span>&#127968;</span>21/5,Annasalai,Coimbatore.</p>
                <p>FOLLOW US!</p>
                <img src="https://cdn.icon-icons.com/icons2/1584/PNG/96/3721672-instagram_108066.png" width="40px" height="40px"></img>
                <img src="https://cdn.icon-icons.com/icons2/836/PNG/96/Twitter_icon-icons.com_66803.png" width="40px" height="40px"></img>
                <img src="https://cdn.icon-icons.com/icons2/555/PNG/96/facebook_icon-icons.com_53612.png" width="40px" height="40px"></img>
            </div>
            <div className="query">
                <br></br>
                <p style={{textAlign:"center"}}>Got an issue? Want to send feedback? 
                    Need details about our Courses? Let us know. </p><br></br>
                <form action="#">
                    <div className="query1">
                        <div className="sb"><label htmlFor="firstName">First Name</label>
                        <input type="text" className="cin"
                            placeholder="Enter First Name"
                            required>
                        </input></div>
                        <div className="sb"><label htmlFor="lastName">Last Name</label>
                        <input type="text" className="cin"
                            placeholder="Enter Last Name"
                            required>
                        </input></div>
                        <div className="sb"><label htmlFor="email">Your Email</label>
                        <input className="cin" type="email" 
                            placeholder="abc@xyz12.org"
                            required>
                        </input></div>

                        <div className="sb"><label htmlFor="subject">Your   Feed</label>
                        <input className="cin" type="text" 
                            placeholder="subject"
                            required>
                        </input>
                        </div>
                    </div>
                    <br></br>
                    <div className="query2">
                    <label htmlFor="message">Your Message(Max 500 words)</label>
                    <textarea className="cin" rows="6" placeholder="Query/Suggestion..."/><br></br>
                    <button className="cbtn" type="submit">
                        Submit Queries
                    </button> 
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact