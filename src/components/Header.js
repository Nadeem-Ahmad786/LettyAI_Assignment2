import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='d-flex justify-content-between pe-5 ps-4 pt-2 mt-4 header'>
            <h1 className="brand h1" >Letty<span style={{color:"white"}}>AI</span></h1>
            <div className="d-flex align-items-center gap-4" id="home" >
            <a className="text-decoration-none text-white fw-bold fs-5" href="#home">Home</a>
            <a className="text-decoration-none text-white fw-lighter fs-5" href="#TEXT 2 IMG">TEXT 2 IMG</a>
            <a className="text-decoration-none text-white fw-lighter fs-5" href="#TEXT 2 IMG">IMG ENHANCER</a>
            <a className="text-decoration-none text-white fw-lighter fs-5" href="#TEXT 2 IMG">DASHBOARD</a>
            <a className="text-decoration-none text-white fw-lighter fs-5" href="#TEXT 2 IMG">PROFILE</a>
            <button className='rounded border text-white border-0  pb-1 ps-4 pe-4 ms-4' style={{background: "#6E3FF2"}}>LOGOUT</button>
            </div>
    </div>
  )
} 

export default Header