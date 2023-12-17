"use client"

import React, { useState } from 'react';
import classes from './HeroSection.module.css';
import { GrAppsRounded } from "react-icons/gr";
import { FaAnglesDown } from "react-icons/fa6";
const HeroNav = () => {
  const [selected, setSelected] = useState('تصفح الأقسام'); // Initially set the last item as selected

  const handleItemClick = (item) => {
    setSelected(item); // Update the selected item on click
  };

  const items = ['العروض الخاصة ', 'الأعلي تقييم ', 'احدث امنتجات ', 'العروض اليومية', 'تصفح الأقسام']; // Array of strings

  return (
    <div>
      <div className={'container my-3'}>
        <div className={classes.border__raduis + ' bg-dark d-flex align-items-center '}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${classes.section__link} ${selected === item ? classes.selected__section : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {index === items.length - 1 ? ( // Check if it's the last item
                <>
                 
                 <div className='d-flex align-items-center justify-content-between  w-100'>
                 <span className={ 'mx-2'}><FaAnglesDown/></span> 
                 <div className="mx-2">
                 {item} {/* Last item text */}
                  <span className={'mx-2'}><GrAppsRounded/> </span> 
                 </div>
                 
                 </div>
                </>
              ) : (
                item // Render other items without icons
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroNav;
