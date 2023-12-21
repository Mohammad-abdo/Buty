import React from 'react'

const ProductCard = ({title,price,rate,path }) => {

  return (
    <div>
     <div className="my-2 rounded-3">
  <div className="row align-items-center justify-content-between">
    <div className="col-md-8">
      <div>
        <div>
          <span className="fw-bold" style={{ fontSize: "15px" }}>
            {title}
          </span>
        </div>
        <div className="d-flex align-items-center text-danger">
          <p className="m-0">${price}</p>
          <span className="ms-2">{rate}</span>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <img
        className="img-fluid"
        style={{ height: "100px", width: "100px" }}
        src={path}
        alt={title}
      />
    </div>
  </div>
</div>

    </div>
  )
}

export default ProductCard
