import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Slider.css"

import react from "../pictures/logo.svg"


import test1 from "../pictures/barb-shop2.webp"
import test2 from "../pictures/barb-shop1.webp"
import test3 from "../pictures/barb-shop2.webp"



function SlideShowHomeTop() {
    return (
      <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={test1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={test2}
            alt="Second slide"
            
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={test3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default SlideShowHomeTop;