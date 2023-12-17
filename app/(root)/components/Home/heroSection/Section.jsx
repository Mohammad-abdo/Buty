import React from 'react'

const Section = ({title,path}) => {
  return (
    <div>
      <a href={path} className='text-black text-decoration-none' style={{fontWeight:"500"}}> {title} </a>
    </div>
  )
}

export default Section
