import React from 'react'


//icons

import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

//components
import SlideShowHomeTop from '../components/Slider'
import CardFlip from '../components/Flip-Card';
import ActionAreaCard from '../components/Card';
import Divider from '@mui/material/Divider';

//Pictures Import
import front from "../pictures/sharo-front.jpg"

import "../styles/Home.css"


const Home = () => {
  return (
    
    <>

      
      <SlideShowHomeTop/>
      
      <Divider sx={{color:"gold",borderBottomWidth: "5px"}}/>

      <div style={{
        display:"flex",
        justifyContent:"space-around",  
        flexWrap:"wrap"
      }}>
        
        <CardFlip/>
        <CardFlip/>
        <CardFlip/>
       
      </div>

      <Divider sx={{color:"gold",borderBottomWidth: "5px"}}/>
      
      <div style={{
        display:"flex",
        justifyContent:"space-around", 
        flexWrap:"wrap"
      }}>
        <img class ="bg" src={front} />
 
      </div>
      <Divider sx={{color:"gold",borderBottomWidth: "5px"}}/>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.277369846475!2d6.976563500071959!3d51.250802214529386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8d12eef5971d7%3A0x4f4d7f14e06ebc58!2sSharo%20barbershop!5e0!3m2!1sen!2sde!4v1657260266842!5m2!1sen!2sde" 
        width="100%" 
        height="600" 
        style={{border:"0",marginBottom:"-6px"}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>

        <Divider sx={{color:"gold",borderBottomWidth: "5px"}}/>
      
      <div class="bottom-home" >

 

        <div style={{display:"flex",justifyContent:"flex-start",flexDirection:"column"}}>
          <h1>Adresse<LocationOnIcon/></h1>
          
          <h4>Poststraße 19</h4>
          <br/>
          <h4>40822 Mettmann</h4>

          
        </div>

        <div>
          <p><ContactMailIcon/>Kontakt</p>
          <p><EuroSymbolIcon/>Preise</p>
          <p><MenuBookIcon/>Impressum</p>
          <p><LocalPoliceIcon/>AGB's</p>
        </div>

      </div>
    </>
        
   


    
  )
}

export default Home