import React from "react"
import amazon from "./assets/logo.png";
import {Link } from "react-router-dom"
const Appbar =(props)=>{
    return(
        <div className="appbar">
        <Link to="/room" >

        <img src={amazon} />
        </Link>
        <div>
          <p onClick={props.handleClickTR}>TR</p>
          <p onClick={props.handleClickEN}>EN</p>
        </div>
      </div>
    )
}

export default  Appbar