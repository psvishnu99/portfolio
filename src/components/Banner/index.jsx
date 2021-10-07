import React from 'react';
import bannerImg from "../../assets/images/me-3.png";


const Banner = ({className}) => {
    return (
        <div className={`banner ${className}`}>
            <div className={`bannerLeft ${className}`}>
                <h4>Hey, I am<br/> UI/UX Designer</h4>
                <p>Hi, I’m Arunkumar a UI/UX designer from Tamilnadu. I help brands turn their ideas into high quality products.</p>
            </div>
            <div className={`bannerRight ${className}`}>
                <img src={bannerImg} alt=""  style={{height:"auto", width:"100%"}}/>
            </div>
        </div>
    )
}

export default Banner;
