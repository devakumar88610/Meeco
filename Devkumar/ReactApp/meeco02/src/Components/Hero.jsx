import react from "react";
import "../Components/Hero.css";
import Carousel from "react-bootstrap/Carousel";

import SliderOne from "../Images/Sileder-one.jpg";
import SliderTwo from "../Images/Silder-two.jpg";
import SliderThree from "../Images/Slider-three.jpg";

class Hero extends react.Component {
  render() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img className='d-block w-100' src={SliderOne} alt='First slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={SliderTwo} alt='Second slide' />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={SliderThree} alt='Third slide' />

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
}

export default Hero;
