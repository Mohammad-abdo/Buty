import React, { useState } from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div className="rating ">
        <div className="" >
  {[...Array(5)].map((_, index) => {
        const value = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleStarClick(value)}
            style={{ cursor: 'pointer' }}
          >
            {value <= rating ? (
              <BsStarFill color="#ffc107" size={18} />
            ) : (
              <BsStar color="#ffc107" size={18} />
              
            )}
          </span>
        );
      })}
      <p> ({rating} )</p>
        </div>
    
    </div>
  );
};

export default Rating;
