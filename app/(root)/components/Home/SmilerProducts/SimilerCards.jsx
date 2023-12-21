import React from 'react'
import Rating from './Rating '
const SimilerCards = ({title, price,src }) => {
  return (
    <div>
        <div class="card bg-light mx-2 rounded-4" style={{height:"35vh"}} >
        <div >
        <img class="card-img-top img-fluid p-2 rounded-4" src={src} alt={title} style={{height:"20vh"}} />
        </div>
            <div class="  text-center">
                <div><h4 class="card-title">{title}</h4></div>
                <div> <p class="card-text">  <Rating/> </p></div>
                <div>  
                <p class="card-title">{price}</p>
                    
                </div>
               
            </div>
        </div>
        
      
    </div>
  )
}

export default SimilerCards
