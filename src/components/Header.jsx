import React from 'react'
import logo from '../assets/logo.png'
import '../styles/Header.css'
import { FiChevronDown } from 'react-icons/fi'
function Header() {
  return (
    <div className='header'>
      <div className="left">
        <img className="logo" src={logo} height={50} width={125} alt="logo" />
        <div className="left-options">
          <span className='l-option'>Expertise<FiChevronDown /></span>
          <span className='l-option'> Solutions<FiChevronDown /></span>
          <span className='l-option'> Services<FiChevronDown /></span>
          
          <span className='l-option'>Blog</span>
        </div>
      </div>
      <div className="right">
        <button className='login-btn'>Login</button>
        <button className='signup-btn'>Sign Up</button>
      </div>
    </div>
  )
}

export default Header
