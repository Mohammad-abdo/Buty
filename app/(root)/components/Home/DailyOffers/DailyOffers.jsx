"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Brand from "./Brand";
import "./styles.css";
const Brands = [
  {
    id: 1,
    src: "images/brands/b-1.png",
  },
  {
    id: 2,
    src: "images/brands/b-2.jpg",
  },
  {
    id: 3,
    src: "images/brands/b-3.png",
  },
  {
    id: 4,
    src: "images/brands/b-4.png",
  },
  {
    id: 5,
    src: "images/brands/b-5.png",
  },
  {
    id: 6,
    src: "images/brands/b-6.jpg",
  },
];
const DailyOffers = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <div className="header container w-[94%] rounded-4 shadow my-4 ">
      <div className="  d-flex align-items-center justify-content-between py-2">
        <span className="bg-light my-1 border-1 mx-2 px-4 shadow p-0 rounded-4 btn">
          All
        </span>
        <span className="mx-2 my-1 fs-5 text-dark-50"> العلامة التجارية</span>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        transitionDuration={500}
        autoPlaySpeed={1000}
        swipeable={true}
        draggable={true}
      >
        {Brands.map((img) => (
          <div className="">
            <Brand src={img.src} key={img.id} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DailyOffers;
