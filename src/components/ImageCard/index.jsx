import React from 'react'

const ImageCard = ({cardDetails, imgFullWidth, className}) => {
    return (
        <div className={`imgCardConatainer ${className}`}>
           { cardDetails &&

             cardDetails.map(cardDetail => (
             <div className="imgCard" >
             <img src={cardDetail.img} alt="" style={{width: imgFullWidth ?"100%": "auto"}} />
             <h3 >{cardDetail.heading}</h3>
             <p>{cardDetail.description}</p>              
           </div>)) 
                
           }
            
        </div>
    )
}

export default ImageCard;
