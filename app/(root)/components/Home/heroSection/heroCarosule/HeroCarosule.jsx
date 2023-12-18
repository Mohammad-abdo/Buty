"use client"
import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

import './styles.css'
const HeroCarosule = () => {
  return (
    <div className='b rounded-4'>
      <MDBCarousel showIndicators showControls fade className='bg-secondary rounded-4' >
        <MDBCarouselItem itemId={1}>
          <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block rounded-4 w-100' style={{ height: "40vh" }} alt='...' />
          <MDBCarouselCaption>

          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block rounded-4  w-100' style={{ height: "40vh" }} alt='...' />
          <MDBCarouselCaption>

          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block rounded-4  w-100' style={{ height: "40vh" }} alt='...' />
          <MDBCarouselCaption>

          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}

export default HeroCarosule