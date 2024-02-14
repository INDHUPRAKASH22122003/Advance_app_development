import './Logincs.css';
import {useState} from "react"
import {FaUser,FaLock} from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
	const[username,setName] = useState('');
	const handleName = (e) => {
        setName(e.target.value)
    }
	const[password,setPassword] = useState('');
	const handlePassword = (e) => {
        setPassword(e.target.value)
    }
	const navigate=useNavigate();
	const handleSubmit = async (e) => {
        e.preventDefault()
        const logindata = {
            username,
			password,
			
        };
		try{
			const response=await axios.post('http://127.0.0.1:8080/products/authenticate',logindata);
			console.log(response.data);
			let token=response.data.token;
			let user=response.data.id;
			localStorage.setItem('token',token);
			localStorage.setItem('user',JSON.stringify(user));
			navigate('/home');
		}catch(error){
			window.alert("Incorrect Username or Password !!!");
		}
        // setName('')
        // setPassword('')
    }

	
	
  return(
  <div className='login-pg'>
        <div className="login-page">
			<img className="rnd" src={"https://media.tenor.com/a1VADuLpJLQAAAAj/%E3%81%8A%E3%82%81%E3%81%A7%E3%81%A8%E3%81%86-%E3%81%8A%E7%A5%9D%E3%81%84.gif"} height={70} alt="Background" />
			<br/><br/>
			<form onSubmit={handleSubmit}>
			<label className='log1'><FaUser style={{"color":"white"}}/> UserName</label><br></br>
			<input type='text' value={username} onChange={handleName} required/>
			<br/><br/>
			<label className='pass'><FaLock style={{"color":"white"}}/> PassWord</label><br></br>
			<input type='password' value={password} onChange={handlePassword} required/>
			<button className='lobutton' type='submit'>Sign In</button>
			</form>
			<Link to="/register" className='rs1'><p className='rs'>No Account? Register Now</p></Link>
      </div>
 </div>
  );
};

export default Login;

