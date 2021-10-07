import React from 'react'

const ImageGrid = ({images}) => {
    return (
       {cardDetails &&  cardDetails.map(cardDetail => (
            <div className="imgCard" >
            <img src={cardDetail.img} alt="" />           
          </div>)) 
       }
    )
}

export default Image;
