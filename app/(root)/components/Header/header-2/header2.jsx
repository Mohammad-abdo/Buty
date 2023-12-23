import React from 'react'
import classNameNameNamees from '../MainHeader.module.css'
import SearchInput from './SearchInput '
import { Navbar, Nav, NavDropdown, Container, FormControl, Button } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Assuming you're using the 'react-icons' library for location icon
import { CiLocationOn } from "react-icons/ci";
const Header2 = () => {
  return (
<div className='bg-[#ddd] '>
<div  className='container w-[95%] py-2' >
<div className="row d-flex align-items-center justify-content-between">
<div className=" lg:w-[25%]  sm:w-[100%]">
<div className="right flex items-center justify-content-between ">
    <div  className='text-[19px] hover:text-[#ed9421]  ' > <a href="#" className='text-decoration-none text-black hover:text-[#ed9421] '> سلة التسوق </a> </div>
    <div  className='text-[19px] hover:text-[#ed9421] '><a href="#" className='text-decoration-none text-black hover:text-[#ed9421] '>المساعدة </a>   </div>
    <div  className=' text-[19px] hover:text-[#ed9421] '> <a href="#" className='text-decoration-none text-black hover:text-[#ed9421] '> تسجيل الدخول </a> </div>
  </div>
</div>
<div className=" lg:w-[50%] sm:w-[50%]">
<div className="right ">
   
      
   <SearchInput/>
 
</div>
</div>
<div className="  lg:w-[25%]  sm:w-[50%]"> 

  <div className=" flex items-center justify-between ">
    <div className=" flex items-center w-1/2 "><span className="text-[19px] mx-1">الرياض </span> <CiLocationOn/> </div>
    <div className="mx-2"><span className="text-[19px]">BUTY CENTER</span></div>
   
      
   
  </div></div>
</div>
    </div>
</div> 
  )
}

export default Header2
