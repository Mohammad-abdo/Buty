import React from 'react'
import Section from './Section'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { TbSmartHome } from "react-icons/tb";
import { RiWirelessChargingFill } from "react-icons/ri";
import { PiCoatHanger } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { CiBasketball } from "react-icons/ci";
import { RiStore2Line } from "react-icons/ri";
import { TbCat } from "react-icons/tb";
import { IoDiamondOutline } from "react-icons/io5";


const AllSection = () => {
    const sections=[
        {
            id:1,
            title:"الموبايلات وتابلت",
            icon:<MdOutlinePhoneIphone/>,
            path:"#"
        },
        {
            id:2,
            title:"إلكترونيات وكمبيوتر",
            icon:<PiTelevisionSimpleLight/>,
            path:"#"
        },
        {
            id:3,
            title:"الصحة والجمال",
            icon:<FaHandHoldingHeart/>,
            path:"#"
        },
        {
            id:4,
            title:"المنزل والمطبخ ",
            icon: <TbSmartHome/>,
            path:"#"
        },
        {
            id:4,
            title:" الاجهزة الكهربائية ",
            icon: <RiWirelessChargingFill/>,
            path:"#"
        },
        {
            id:5,
            title:"أزياء والإكسسوارات",
            icon:<PiCoatHanger/>,
            path:"#"
        },
        {
            id:6,
            title:"فن وكتب ",
            icon:<PiCoatHanger/>,
            path:"#"
        },
        {
            id:7,
            title:"مستلزمات رياضية",
            icon:<CiTrophy/>,
            path:"#"
        },
        {
            id:8,
            title:"العاب ومنتجات الاأطفال",
            icon:<CiBasketball/>,
            path:"#"
        },
        {
            id:9,
            title:"بقالة",
            icon:<RiStore2Line/>,
            path:"#"
        },
        {
            id:10,
            title:"مستلزمات الحيوانات",
            icon:<TbCat/>,
            path:"#"
        },
        {
            id:11,
            title:"أقسام أخري",
            icon:<IoDiamondOutline/>,
            path:"#"
        },
    ]
  return (
    <div>
      <div className="bg-light shadow rounded-4 py-1 " style={{height:"75vh"}}>
{
    sections.map(item =>(
      <div className=" d-flex align-items-center justify-content-end " key={item.id} style={{margin:"18px 0"}}>
          <Section path={item.path}  title={item.title}/>
          <div className="icon mx-2 "> {item.icon}  </div>
      </div>

    ))
}
      </div>
    </div>
  )
}

export default AllSection
