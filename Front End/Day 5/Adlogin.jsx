import './Logincs.css'; // Make sure to import your CSS file
import {FaUser,FaLock} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const AdLogin = () => {
	
  return(
  <div className='login-pg'>
        <div className="login-page">
			<img className="rnd" src={"https://media.tenor.com/a1VADuLpJLQAAAAj/%E3%81%8A%E3%82%81%E3%81%A7%E3%81%A8%E3%81%86-%E3%81%8A%E7%A5%9D%E3%81%84.gif"} height={70} alt="Background" />
			<h3 className='adl'>ADMIN LOGIN</h3><br></br>
			<label className='log1'><FaUser style={{"color":"white"}}/> UserName</label><br></br>
			<input type='text'/>
			<br/><br/>
			<label className='pass'><FaLock style={{"color":"white"}}/> PassWord</label><br></br>
			<input type='password'/>
			<Link className='lk' to="/adhome"><button className='login-button'>Sign In</button></Link>
			<Link to="/register" className='rs1'><p className='rs'>No Account? Register Now</p></Link>
      </div>
	{/* <div className="box">
		<form>
			<span className="text-center">login</span>
			<div className="input-container">
				<input type="text" required=""/>
				<label>Full Name</label>		
			</div>
			<div className="input-container">		
				<input type="mail" required=""/>
				<label>Email</label>
			</div>
			<button type="button" className="btn">submit</button>
		</form>	
	</div> */}
 </div>
  );
};

export default AdLogin;

