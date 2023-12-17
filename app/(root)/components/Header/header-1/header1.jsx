"use Client"
import React,{useState} from 'react'
import classes from '../MainHeader.module.css'
import { useTranslation  } from "react-i18next";
import withTranslation from '@/../../withTranslation'
import Links from './Links';
import CustomLanguageDropdown from './CustomLanguageDropdown '
const Header = () => {
  const {t} = useTranslation();

  const HeadLinks=[

    {
      id:2,
      content:`${t("Contact")}`,
      path:"/"
    },
    {
      id:3,
      content:`${t("Email")}`,
      path:"/"
    },
  
  ]
  return (
    <div>
    <div className="container  my-3">
        <div className="d-flex  flex-md-row align-items-center justify-content-between ">
        <div>
        <a href={'#'}  className= {classes.head1__a__hover + '  text-black-50  text-decoration-none'}> <CustomLanguageDropdown/></a>

              {
                HeadLinks.map((link)=>(
<Links content={link.content}  key={link.id} path={link.path}/>
                ))
              }
           
            </div>
            <div><a href="#" className=' text-black-50  m-0 text-decoration-none' > {t("trader")} </a></div>
            
        </div>
      </div>
    </div>
  )
}

export default withTranslation(Header)
