import React from "react";
import CarosuleCards from './CarosuleCards'
const SmilerProd = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex align-items-center justify-content-between">
       
        <div className=" rounded-4 shadow" style={{backgroundColor:"#ddd",width:"73%"}}>
          <div className="my-2 d-flex align-items-center justify-content-between">
            <span className="bg-light my-1 border-1 mx-2 px-4 shadow p-0 rounded-4 btn">
              All
            </span>
            <span className="mx-2 my-1 fs-5 text-dark-50"> تصفح الاقسام </span>
          </div>
          <div className="mb-2">
            <div className="my-4">
                <CarosuleCards/>
            </div>
            <div className="my-4">
                <CarosuleCards/>
            </div>
          </div>
        </div>
        <div className="col-3 rounded-4">
          <div
            className="bg-image rounded-4 "
            style={{
              background: "url(images/smiler/bg-1.jpeg)",
              backgroundPosition:"center",
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover",
              position:"relative",
              height: "86vh",
            }}
          >

            <h4 className="text-white fw-bold text-center my-2 py-3"> أزياء واكسسوارات </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmilerProd;
