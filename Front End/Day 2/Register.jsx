// import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div>
        <div className='reg-pg'>
        <div className="reg-page">
			<img src={"https://media.tenor.com/a1VADuLpJLQAAAAj/%E3%81%8A%E3%82%81%E3%81%A7%E3%81%A8%E3%81%86-%E3%81%8A%E7%A5%9D%E3%81%84.gif"} height={70} alt="Background" />
			<br/><br/>
            <form>
                <label>UserName</label><br></br><br></br>
                <input type='text'required/><br></br><br></br>
                <label>Email</label><br></br><br></br>
                <input type='email' required/><br></br><br></br>
                <label>PassWord</label><br></br><br></br>
                <input type='password'required/><br></br><br></br>
                <label>Conform PassWord</label><br></br><br></br>
                <input type='password'required/>
            </form>
            <br></br>
			<Link className='lgk' to="/"><button className='reg-button'>Sign Up</button></Link>
			<Link to="/" className='rgs1'><p className='rgs'>Have an Account? Login Now</p></Link>
       </div>
    </div>
    </div>
  )
}

export default Register