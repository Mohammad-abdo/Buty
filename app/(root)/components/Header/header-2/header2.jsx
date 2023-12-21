import React from 'react'
import classNameNameNamees from '../MainHeader.module.css'
import SearchInput from './SearchInput '
import { Navbar, Nav, NavDropdown, Container, FormControl, Button } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Assuming you're using the 'react-icons' library for location icon
import { CiLocationOn } from "react-icons/ci";
const Header2 = () => {
  return (
    <div  className='container'>
<div className="row d-flex align-items-center justify-content-between">
<div className="col-lg-3 col-md-3 sm-col-6">
<div className="right d-flex align-items-center justify-content-between">
    <div  className='fs-5 ' > <a href="#" className='text-decoration-none text-dark'> سلة التسوق </a> </div>
    <div  className='fs-5'><a href="#" className='text-decoration-none text-dark'>المساعدة </a>   </div>
    <div  className=' fs-5'> <a href="#" className='text-decoration-none text-dark'> تسجيل الدخول </a> </div>
  </div>
</div>
<div className="col-lg-6 md-col-6 sm-col-12">
<div className="right ">
   
      
   <SearchInput/>
 
</div>
</div>
<div className="col-lg-3  col-md-3 sm-col-6"> 

  <div className=" d-flex justify-content-between ">
    <span className="fs-5">الرياض <CiLocationOn/> </span>
   
      <span className="fs-5">BUTY CENTER</span>
   
  </div></div>
</div>
    </div>
  )
}

export default Header2
