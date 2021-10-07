import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import ImageCard from '../../components/ImageCard';
import uiux from "../../assets/images/ux.png";
import mobile from "../../assets/images/ui-design.png";
import visual from "../../assets/images/designer.png";
import img1 from "../../assets/images/11.png";
import img2 from "../../assets/images/333.png";
import img3 from "../../assets/images/222.png";
import img4 from "../../assets/images/1234.png";
import img5 from "../../assets/images/14.png";
import img6 from "../../assets/images/111.png";

const cardDetails = [ {img:uiux, heading:"UI/UX Design" , description:"Designed mock ups of UI layout and created assets for use in multiple shipped titles."},{img:mobile, heading:"Web & Mobile App" , description:"Designing UI/UX for Android, IOS, Web app for whole Product."}, {img:visual, heading:"Visual Design" , description:"Android, IOS, Web app, Websites and Social media graphic images for whole product."}]
const cardDetails2 = [ {img:img1, heading:"" , description:""},{img:img2, heading:"" , description:""}, {img:img3, heading:"" , description:""}]
const cardDetails3 = [ {img:img4, heading:"" , description:""},{img:img5, heading:"" , description:""}, {img:img6, heading:"" , description:""}]
const Home = () => {
    const [width,setWidth] = useState(window.innerWidth);

    
    useEffect(() => {
        window.addEventListener("resize", ()=> {
            setWidth(window.innerWidth)
        })
        return () => window.removeEventListener("resize", () => {
            setWidth(window.innerWidth)
        } )
    }, [])
    
    return (
        <div className="container">
            <Navbar />
            <Banner className={`${width <  468 ? "mobile" : ""}`} />
            <ImageCard cardDetails={cardDetails} className={`${width <  468 ? "mobile" : ""}`}/>
  
            <h2 className="heading">My Works</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            <ImageCard cardDetails={cardDetails2} imgFullWidth className={`${width <  468 ? "mobile" : ""}`}/>
            <ImageCard cardDetails={cardDetails3} imgFullWidth className={`${width <  468 ? "mobile" : ""}`}/>

        </div>
    )
}

export default Home;
