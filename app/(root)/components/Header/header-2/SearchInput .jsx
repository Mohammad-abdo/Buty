import React, { useState, useEffect } from 'react';
// import './SearchInput.css'; // Import CSS file for styling
import { FaAngleDoubleDown } from "react-icons/fa";
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
    // <div className="search-input-container">
    //   <div className="search-input" style={{ border: '2px solid yellow' }}>
    //     <input
    //       type="text"
    //       placeholder="Search..."
    //       value={searchTerm}
    //       onChange={handleInputChange}
    //     />
    //     {showDropdown && (
    //       <div className="dropdown-options">
    //         {dropdownOptions.map((option, index) => (
    //           <div
    //             key={index}
    //             className="dropdown-option"
    //             onClick={() => handleDropdownSelection(option)}
    //           >
    //             {option}
    //           </div>
    //         ))}
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="form-group d-flex align-items-center border border-3 border-warning px-3 rounded-pill  " style={{borderColor:"red"}}>
        <input type="text" className="form-control border-0 shadow-none d-flex justify-content-end " placeholder='...بحث'/>
        <div class="dropdown open d-flex align-items-center">
          <FaAngleDoubleDown className='mx-2'/>
         الاقسام 
        </div>
        
    </div>
  );
};

export default SearchInput;
