import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import "../styles/HideAppBar.css"
import reactLogo from "../pictures/logo.svg"

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

import Tooltip from '@mui/material/Tooltip';

//color imports

import {amber} from "@mui/material/colors"


//Icon Imports

import ContentCutIcon from '@mui/icons-material/ContentCut';
import Button from '@mui/material/Button';
import TemporaryDrawer from './Drawer';
import IconButton from '@mui/material/IconButton';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



export default function HideAppBar(props) {

  const [hoverRefKontakt, isKontaktHovered] = useHover();
  const [hoverRefShop, isShopHovered] = useHover();
  const [hoverRefPreis, isPreisHovered] = useHover();
  const [hoverRefInfo, isInfoHovered] = useHover();

  function useHover() {
    const [value, setValue] = useState(false);
    const ref = useRef(null);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    useEffect(
      () => {
        const node = ref.current;
        if (node) {
          node.addEventListener("mouseover", handleMouseOver);
          node.addEventListener("mouseout", handleMouseOut);
          return () => {
            node.removeEventListener("mouseover", handleMouseOver);
            node.removeEventListener("mouseout", handleMouseOut);
          };
        }
      },
      [ref.current] // Recall only if ref changes
    );
    return [ref, value];
  }
  return (
    <React.Fragment>
      <CssBaseline />
        
        <AppBar  style={{backgroundColor:`black`,border: "solid gold 1px"}}>
          <Toolbar className='Appbar'>

          <div className="div-appbar" style={{textAlign :"center"}} >
            <Tooltip title="Kontakt">
              <ContactMailIcon ref={hoverRefKontakt} sx={{color:isKontaktHovered ? amber[500] : "inherit"}} />
            </Tooltip>  
          </div>
          
          <div className="div-appbar" style={{textAlign :"center"}}>
            <Tooltip title="Shop">
              <ShoppingBasketIcon ref={hoverRefShop} sx={{color:isShopHovered ? amber[500] : "inherit"}}/>
            </Tooltip>
              
          </div>
          

          <img className='appbar-img'  src={reactLogo}/>


          <div className="div-appbar" style={{textAlign :"center"}}>
            <Tooltip  title="Preise">
              <EuroSymbolIcon ref={hoverRefPreis} sx={{color:isPreisHovered ? amber[500] : "inherit"}}/> 
            </Tooltip>
            
          </div>

          <div className="div-appbar" style={{textAlign :"center"}}>
            <Tooltip title="Über uns">
              <InfoIcon ref={hoverRefInfo} sx={{color:isInfoHovered ? amber[500] : "inherit"}} /> 
            </Tooltip>
               
          </div>
          
          


          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <TemporaryDrawer/>
          </IconButton>
            <Typography 
                style={{fontFamily: " Copperplate,Copperplate Gothic Light,fantasy"}}
                variant="h4" component="div" sx={{ flexGrow: 1 , textAlign:"center"}}>
              Sharo - Barbershop
            </Typography> */}
          </Toolbar>
        </AppBar>
      
      <Toolbar />

    </React.Fragment>
  );
}