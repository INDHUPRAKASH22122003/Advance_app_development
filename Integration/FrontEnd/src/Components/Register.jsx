// import React from 'react'
import './Register.css'
import {useState} from "react"
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate=useNavigate();
  const checkPassword = () =>{
    if (!name||!email||!password||!confirmPassword) {
      window.alert("Please fill out required fields");
      return;
    }
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    if (!emailRegex.test(email)) {
      window.alert("Invalid format. Please use the format like: indhu@gmail.com");
      initialize3();
      return;
    }
    if (!passwordRegex.test(password)) {
      window.alert(
        "Invalid format. Please use the format like: Ex:Ja$4StuN"
      );
      initialize1()
      return;
    }
    else if (password !== confirmPassword) {
      window.alert("Passwords do not match.");
      initialize2()
      return;
    }
    else{
      window.alert("Registration Successful !!!");
    }
  }
  const initialize1 = () =>{
    setPassword('')
    setConfirmPassword('')
  }
  const initialize2 = () =>{
    setConfirmPassword('')
  } 
  const initialize3 = () => {
    setEmail('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };
    console.log(userData);
    navigate('/login');
    try {
      const response = await axios.post('http://127.0.0.1:8080/products/register', userData);
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  return (
    <div>
        <div className='reg-pg'>
        <div className="reg-page">
			<img src={"https://media.tenor.com/a1VADuLpJLQAAAAj/%E3%81%8A%E3%82%81%E3%81%A7%E3%81%A8%E3%81%86-%E3%81%8A%E7%A5%9D%E3%81%84.gif"} height={70} alt="Background" />
			<br/><br/>
            <form onSubmit={handleSubmit}>
              <label>UserName</label><br></br><br></br>
              <input type='text' value={name} onChange={(e) => setName(e.target.value)} required/><br></br><br></br>
              <label>Email</label><br></br><br></br>
              <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/><br></br><br></br>
              <label>PassWord</label><br></br><br></br>
              <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required/><br></br><br></br>
              <label>Conform PassWord</label><br></br><br></br>
              <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
              <br></br>
              <button className='reg-button' onClick={checkPassword} type="submit">Sign Up</button>
            </form>
			<Link to="/login" className='rgs1'><p className='rgs'>Have an Account? Login Now</p></Link>
       </div>
    </div>
    </div>
  )
}

export default Register