import React from 'react'

const Brand = ({src}) => {
  return (
    <div>
            <div className=" shadow m-2 h-full rounded-3 ">
                        <div className="card">
                            <div className="card-img  text-center">
                                <img className='img-fluid rounded-4' style={{ height: "12vh" }} src={src}    />
                        </div>
                        </div>
                    </div>
    </div>
  )
}

export default Brand
