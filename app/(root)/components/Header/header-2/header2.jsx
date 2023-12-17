import React from 'react'
import classNameNameNamees from '../MainHeader.module.css'
import SearchInput from './SearchInput '
import { Navbar, Nav, NavDropdown, Container, FormControl, Button } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Assuming you're using the 'react-icons' library for location icon

const Header2 = () => {
  return (
    <div  className='container'>
<div className="d-flex align-items-center justify-content-between">
  <div className="right ">
    <a href="" className='mx-3 '>سلة التسوق</a>
    <a href="" className='mx-3 '>المساعدة </a>
    <a href="" className='mx-3 '>تسجيل الدخول</a>
  </div>
  <div className="right ">
   
      
      <SearchInput/>
    
  </div>
  <div className="right d-flex ">
    {/* <span>الرياض</span> */}
    <div className=" ">
      <span>BUTY CENTER</span>
    </div>
  </div>
</div>
    </div>
  )
}

export default Header2
