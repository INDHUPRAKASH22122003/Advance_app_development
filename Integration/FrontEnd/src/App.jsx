// import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom" 
import Login from "./Components/Login"
import Theme from './Components/Theme'
import Home from "./Components/Home"
import About from './Components/About'
import Contact from './Components/Contact'
// import AddTheme from './Components/Addtheme'
import AdEvents from './Components/AdEvents'
import Register from'./Components/Register'
import Form from './Components/Form'
// import Nav from "./Components/Nav"
// import Slider from './Components/Slider'
import FirstPage from './Components/FirstPage'
import Adlogin from './Components/Adlogin'
import Adhome from './Components/Adhome'
import ViewEvents from './Components/ViewEvents'
import Status from './Components/Status'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/theme" element={<Theme/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/addevents" element={<AdEvents/>}></Route>
        <Route path="/" element={<FirstPage/>}></Route>
        <Route path="/adlogin" element={<Adlogin/>}></Route>
        <Route path="/adhome" element={<Adhome/>}></Route>
        <Route path="/viewevents" element={<ViewEvents/>}></Route>
        <Route path="/status" element={<Status/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Login/> */}
      {/* <Nav/> */}
      {/* <Home/> */}
      {/* <Slider/> */}
      {/* <Theme/> */}
      {/* <Contact/> */}
      {/* <About/> */}
      {/* <AddTheme/> */}
      {/* <ShowTheme/> */}
      {/* <Form/> */}
    </div>
  )
}

export default App