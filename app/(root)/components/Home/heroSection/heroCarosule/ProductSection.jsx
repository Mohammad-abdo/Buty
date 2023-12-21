import React from 'react'

const ProductSection = ({src}) => {
  return (
    <div>
          <div className=" shadow mx-2 h-full rounded-4 " >
          <div className="card">
              <div className="card-img  text-center">
                  <img className='img-fluid rounded-4' style={{ height: "16vh" }} src={src}    />
          </div>
          </div>
      </div>
    </div>
  )
}

export default ProductSection
