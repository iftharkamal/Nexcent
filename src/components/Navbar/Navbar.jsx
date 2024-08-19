import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div>
        <img  src={logo} alt="" />
      </div>

      <div className='navbar-lists'>
        <a href="">Home</a>
        <a href="">Service</a>
        <a href="">Feature</a>
        <a href="">Product</a>
        <a href="">Testimonial</a>
        <a href="">FAQ</a>
      </div>

      <div className='buttons-field'>
        <button className='login'>Login</button>
        <button className='signup'>Sign up</button>
      </div>


    </div>
  )
}

export default Navbar
