"use client"
import React from 'react'
import SimilerCards from './SimilerCards'
import Carousel from  "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const products =[
    {
        id:1,
        title:" تيشرت اسود انيق ",
        price:"$ 19",
        rate:4.9,
        src:"images/smiler/t-1.jpg"

    },
    {
        id:2,
        title:" تيشرت الهلال السعودي  ",
        price:"$ 8",
        rate:5.0,
        src:"images/smiler/t-2.jpeg"

    },
    {
        id:3,
        title:"  حزام مطرز",
        price:"$ 3",
        rate:4.9,
        src:"images/smiler/t-3.jpeg"

    },
    {
        id:4,
        title:"  لاب توب ديل 2034  ",
        price:"$ 590",
        rate:4.9,
        src:"images/smiler/t-4.jpeg"

    },
    {
        id:5,
        title:" قبعة سوداء  ",
        price:"$ 1.4",
        rate:3.2,
        src:"images/smiler/t-5.jpeg"

    },
]
const CarosuleCards = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div >
          <Carousel responsive={responsive}
        infinite={true}
        transitionDuration={500}
        autoPlaySpeed={1000}
        swipeable={false}
        draggable={false}
      >
        
      {
        products.map((item)=>(
     <div >
       <SimilerCards src={item.src} title={item.title} price={item.price}  key={item.id}/>
     </div>
        ))
      }
       
      

      </Carousel>
    </div>
  )
}

export default CarosuleCards
