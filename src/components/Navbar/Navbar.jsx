import React, { useState } from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from "react-router-dom"
import {SidebarData} from "./SidebarData"
import {IconContext} from "react-icons"
import "./Navbar.css"
function Navbar(props) {
    // const [sidebar,setSidebar]=useState(false)
    // const showSidebar=()=>setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{color:"#fff"}}>
    <div 
      style={{ zIndex: 1031,margin:"-65px -40px 0 0 " }}
      className="w-100 h-100 position-fixed bg-dark"
    >
        <div  className="container">
        <div className="d-flex">
      {/* <div className="navbar">
          <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar}/>
          </Link>
          </div> */}

      {/* <nav className={props.setSidebar? "nav-menu-active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={props.setSidebar}>
              <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                      <AiIcons.AiOutlineClose/>
                  </Link>
              </li> */}
              <ul className="nav-menu-items ">
              <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose
              onClick={()=>{props.setSidebar(false)}}/>
                  </Link>
              </li>
              {SidebarData.map((item,index)=>{
                  return(
                      <li key={index} className={item.cName}>
                          <Link to={item.path}>
                              {item.icon}
                  <span>{item.title}</span>
                          </Link>
                      </li>
                  )
              })}

          </ul>

      {/* </nav> */}
      </div>
      </div>
      </div>
      </IconContext.Provider>

    </>
  );
}

export default Navbar;
