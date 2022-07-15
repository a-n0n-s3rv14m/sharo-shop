import React from 'react';

//components
import ActionAreaCard from './Card';
import BoxSx from './Box';
//styles
import "../styles/Flip-Card.css"


export default function CardFlip () {

    return(
        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	        <div class="flipper">
		        <div class="front" style={{width:"320px", height:"460px"}}>
                    
			        {/* Front Content */}
		        </div>
		        <div class="back">
                    <ActionAreaCard/>
			        {/*  back content */}
		        </div>
	        </div>
        </div>
    )
}
