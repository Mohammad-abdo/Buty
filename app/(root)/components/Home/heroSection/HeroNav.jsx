"use client"

import React, { useState } from 'react';
import classes from './HeroSection.module.css';

const HeroNav = () => {
  const [selected, setSelected] = useState('تصفح الأقسام'); // Initially set the last item as selected

  const handleItemClick = (item) => {
    setSelected(item); // Update the selected item on click
  };

  const items = ['العروض الخاصة ', 'الأعلي تقييم ', 'احدث امنتجات ', 'العروض اليومية', 'تصفح الأقسام']; // Array of strings

  return (
    <div>
      <div className={'container my-3'}>
        <div className={classes.border__raduis + ' bg-dark d-flex align-items-center my-3'}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${classes.section__link} ${selected === item ? classes.selected__section : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {index === items.length - 1 ? ( // Check if it's the last item
                <>
                 
                  <span className={'mx-4'}>ICON</span> 
                  {item} {/* Last item text */}
                  <span className={ 'mx-4'}>ICON</span> 
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
