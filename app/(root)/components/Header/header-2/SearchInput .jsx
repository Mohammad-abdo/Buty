import React, { useState, useEffect } from 'react';
// import './SearchInput.css'; // Import CSS file for styling
import { FaAngleDoubleDown } from "react-icons/fa";
import SctionsSelect from './SctionsSelect'
import './style.css'

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownOptions, setDropdownOptions] = useState([
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 3',
    'Option 3',
    'Option 3',
    'Option 3',
    'Option 3',
    'Option 3',
    'Option 3',
    'Option 3',
    'Option 3',
    'Option 3',
    'Option 3',
    'Option 3',
    'Option 3',
    // Add more options as needed
  ]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowDropdown(true);
    // Implement search logic here if needed
  };

  const handleDropdownSelection = (option) => {
    setSearchTerm(option);
    setShowDropdown(false);
    // Additional logic after selecting an option from dropdown
  };

  useEffect(() => {
    // Handle events like clicking outside the search input to close dropdown
    const closeDropdown = (event) => {
      if (event.target.closest('.search-input-container') === null) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', closeDropdown);

    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  return (

    <div className=" position-relative form-group d-flex align-items-center  border-2 bg-light   border-warning px-3 rounded-pill  " >
        <input type="text" className="form-control border-2 bg-light  border-0 shadow-none d-flex justify-content-end   " placeholder='...بحث ' style={{direction:"rtl"}}/ >
        <div className=" transform translate-x-[14px] bg-light rounded-pill px-1 overlay-none">
       
         {/* <SctionsSelect/> */}
  <select className=" border-none  p-2  bg-light rounded-pill">
  <option>الاقسام </option>
  <option value="US"  className=' my-3 block' style={{margin:"10px"}}>United States</option>
  <option value="CA"><span  className=' my-3 block'>Canada</span></option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>


        </div>
        
    </div>
  );
};

export default SearchInput;
