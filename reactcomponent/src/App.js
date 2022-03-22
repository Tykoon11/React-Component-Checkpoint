import logo from './logo.svg';
import './App.css';
import "./style.css"
// import React from "react"
import Address from './component/profile/address.js' 
import FullName from "./component/profile/fullname.js"
import ProfilePhoto from "./component/profile/profilephoto.js"




const App = () => (
    <>
        <FullName/>
        <Address/>
        <ProfilePhoto/>
    </>
  )


export default App;
