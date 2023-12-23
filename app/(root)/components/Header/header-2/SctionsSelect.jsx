// import React, { useState } from 'react';
// import Select from 'react-select';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ]

// const SctionsSelect = () => {
//     const [selectedOption, setSelectedOption] = useState(null);

//   return (
//     <div>
//         <div className=" ">
//       <Select
//       className='bg-light rounded-pill'
//         options={options}
//       />
//     </div>
//     </div>
//   )
// }

// export default SctionsSelect
import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' },
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' },
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' },
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: 130, // Set your desired width
    backgroundColor: '#f4f4f4',
    border: '1px solid #ccc',
    borderRadius: 5,
    zIndex:10000,
    padding: '0',
  }),
  // Add other style modifications as needed
};

const SctionsSelect = () => {
  return (
    <Select
      options={options}
      styles={customStyles}
      placeholder="ألاقسام"
    />
  );
};

export default SctionsSelect;
