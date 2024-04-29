import React, { useState } from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Post from './components/Post'
import RightBar from './components/RightBar'
import {data2,data} from './Data';
const App = () => {
  const [bgColor,setbgColor]=useState('#232D3f');
  const [color,setColor]=useState("white");
  const [toggle,setToggle]=useState(true);



  const toggleButton=()=>{
    setToggle(!toggle);
    if(toggle){
      setbgColor("rgb(255,255,255");
      setColor("black");
      document.querySelector("body").style.backgroundColor="#cbc5c5"
    }
    else{
      setbgColor("#232D3f");
      setColor("white");
      document.querySelector("body").style.backgroundColor="#black"
    }
  }
  return (
    <>
      <NavBar  bgColor={bgColor} color={color} toggleButton={toggleButton}  toggle={toggle} />
      <div className="container">
        <div className="side_bar">
          <SideBar bgColor={bgColor} color={color}  />
        </div>
        <div className="post_section">
          {
            data.map((d)=>
            <Post key={d.id} data={d} bgColor={bgColor} color={color}  />)
          }
        </div>
        <div className="right_bar">
        {
            data2.map((d)=>
            <RightBar key={d.id} data={d} bgColor={bgColor} color={color}  />)
          }
        </div>
      </div>
    </>
  )
}

export default App