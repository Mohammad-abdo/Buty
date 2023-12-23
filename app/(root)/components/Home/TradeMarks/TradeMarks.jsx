"use client";
import React, { useState } from "react";
import ProductCard from './ProductCard'

const menWatch = [
  {
    id: 1,
    title: "Casio Men's Dial Stainless Steel Band Watch",
    price: "200",
    rate: 4.5,
    description:
      "Functionality and Efficiency The precise engineering of the Casio black dial watch renders a superior level of service. Quiet and accurate quartz movement allows for regular timekeeping, and luminous",
    images: [
      "images/watch/1-1.jpg",
      "images/watch/1-2.jpg",
      "images/watch/1-3.jpg",
      "images/watch/1-4.jpg",
      "images/watch/1-1.jpg",
    ],
    Brand: "Venice",
    color: "black",
  },
  {
    id: 2,
    title: "MF MINI FOCUS Men's Watch Fashion Tonneau Wrist Watches",
    price: "1,250",
    rate: 4.5,
    description:
      "★ Multi-function ★ : Six-hand Multi-function Quartz Movement ,Three Chronograph Sub-dial,1/10 Sec Sub-dial, Seconds sub-dial, Minute Sub-dial.★ Wate",
    images: [
      "images/watch/2-1.jpg",
      "images/watch/2-2.jpg",
      "images/watch/2-3.jpg",
      "images/watch/2-4.jpg",
      "images/watch/2-5.jpg",
    ],
    Brand: "MF MINI FOCUS",
    color: "red",
  },
  {
    id: 3,
    title: "Casio Men's Dial Stainless Steel Band Watch",
    price: "670,10",
    rate: 4.5,
    description:
      "Functionality and Efficiency The precise engineering of the Casio black dial watch renders a superior level of service. Quiet and accurate quartz movement allows for regular timekeeping, and luminous",
    images: [
      "images/watch/1-1.jpg",
      "images/watch/1-2.jpg",
      "images/watch/1-3.jpg",
      "images/watch/1-4.jpg",
      "images/watch/1-1.jpg",
    ],
    Brand: "Venice",
    color: "black",
  }
 
];

const TradeMarks = () => {
  const [selectedWatch, setSelectedWatch] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);

  const getWatch = (id) => {
    console.log(id);
    const index = menWatch.findIndex((watch) => watch.id === id);
    if (index !== -1) {
      setSelectedWatch(index);
    }
  };

  const showImg = (index) => {
    setSelectedImg(index);
    console.log(index);
  };
  return (
    <div className="container w-[94%] my-3">
      <div className="row d-flex justify-content-between">
        <div className="col-lg-8 col-md-8 col-sm-12   rounded-4 shadow " style={{backgroundColor:"#ddd",width:"64%"}}>
          <div className="my-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="m-2 shadow  py-1 bg-white rounded-3">
                <span className="px-4 fw-bold text-success">عرض الكل</span>
              </div>
              <div className="m2">
                <span className="">{menWatch[selectedWatch].title}</span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="row d-flex  justify-content-between ">
              <div className="col-5  d-flex flex-column  justify-content-evenly  ">
                <div>
                  <span className="fw-bold fs-5 " >{menWatch[selectedWatch].title}</span>
                </div>
                <div>
                  <p>{menWatch[selectedWatch].description}</p>
                </div>
                <div>
                  <p className="fw-bold fs-5 text-danger " >Price: ${menWatch[selectedWatch].price}</p>
                </div>

                <div className="w-100  d-flex  align-items-center ">
                  {" "}
                  <button className="btn btn-primary w-100">
                    {" "}
                    إضافة لسلة التسوق
                  </button>
                </div>
              </div>
              <div className="col-7 my-3 d-flex  align-items-center justify-content-between">
                <div
                  className="main-img w-75 "
                  style={{ height: "330px", width: "390px" }}
                >
                  <img
                    className="card-img-top rounded-3 shadow img-fluid"
                    style={{ height: "100%", width: "100%", objectFit: "fill" }}
                    src={menWatch[selectedWatch].images[selectedImg]}
                    alt="Title"
                  />
                </div>
                <div className="all-img  d-flex flex-column mx-3   align-items-center justify-content-center  ">
                  {menWatch[selectedWatch].images.map((img, index) => (
                    <div
                      className="my-2"
                      style={{ height: "50px", width: "80px" }}
                    >
                      <img
                        key={index}
                        onClick={() => showImg(index)}
                        className=" rounded-3 shadow  img-fluid"
                        style={{ height: "60px", width: "100%" }}
                        src={img}
                        alt="Title"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" d-flex flex-sm-column  rounded-4 shadow  " style={{backgroundColor:"#ddd",width:"33%"}}>
          <div className="my-3 text-end">
                    <h4>ٌقد يعجبك</h4>
          </div>
          {menWatch.map((item, index) => (
            <div onClick={() => getWatch(item.id)}>

              <ProductCard title={item.title} price={item.price} rate={item.rate} path={item.images[0]}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradeMarks;
