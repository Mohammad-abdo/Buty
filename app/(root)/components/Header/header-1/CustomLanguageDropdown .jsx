
import React, { useEffect, useState } from 'react';
import classes from '../MainHeader.module.css'
import { useTranslation } from 'react-i18next';

const CustomLanguageSelect = () => {
  const { i18n } = useTranslation();
  const [reloadPage, setReloadPage] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageInLocalStorage(lng); // Store selected language in local storage
    setReloadPage(true); // Set reloadPage to true to trigger reload after a delay
  };

  const setLanguageInLocalStorage = (lng) => {
    localStorage.setItem('selectedLanguage', lng);
  };

  useEffect(() => {
    // On component mount, check if language is stored in local storage and set it
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage && selectedLanguage !== i18n.language) {
      changeLanguage(selectedLanguage);
    }
  }, [i18n.language]); // Run this effect whenever i18n.language changes

  useEffect(() => {
    if (reloadPage) {
      // Wait for 2 seconds before reloading the page
      const timeout = setTimeout(() => {
        window.location.reload();
        
      }, 2000);

      // Clear the timeout on component unmount or when reloadPage changes
      return () => clearTimeout(timeout);
    }
  }, [reloadPage,i18n.language]);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    if (i18n.language !== selectedLanguage) {
      changeLanguage(selectedLanguage);
    }
  };

  return (

      <select className={classes.custom__select} value={i18n.language} onChange={handleLanguageChange}>
     
        <option value="en" className='p-4 bg-[#000] w-6'>English</option>
     <option value="sr" className='m-4'>العربية</option>
    
      
     </select>
    



  );
};

export default CustomLanguageSelect;
