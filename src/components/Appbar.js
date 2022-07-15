import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './Drawer';
import ContentCutIcon from '@mui/icons-material/ContentCut';


import "../styles/HideAppBar.css"
import reactLogo from "../pictures/logo.svg"

import PropTypes from 'prop-types';


import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

import Tooltip from '@mui/material/Tooltip';

//color imports

import {amber} from "@mui/material/colors"


//Icon Imports
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export default function ButtonAppBar() {
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

    <Box sx={{ flexGrow: 1, color:"white" }}>
      <AppBar position="static" style={{backgroundColor:`black`,border: "solid gold 1px"}}>
        <Toolbar>
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
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}