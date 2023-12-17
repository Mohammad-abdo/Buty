"use client "
import React, { useState } from 'react'
import classes from '../MainHeader.module.css'
import withTranslation from '@/../../withTranslation'

import { useTranslation  } from "react-i18next";
const Links = ({path,content}) => {
    const { i18n } = useTranslation();

    const changeLanguage = () => {
        console.log(content);
        if(content == "English"){
            i18n.changeLanguage("en")
            console.log(content);

        }else if(content == "العربية"){
            i18n.changeLanguage("sr")
        }
      
    };
 
  return (
    
            <a href={path} onClick={()=>changeLanguage()} className= {classes.head1__a__hover + ' px-2 text-black-50  text-decoration-none'}>{ content}</a>
 
  )
}

export default Links
