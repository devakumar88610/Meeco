import react from "react";
import "../Components/Hero.css";

class Hero extends react.Component {
  render() {
    return (
      <div className='hero-container'>
        <div className=''>
          <h2 className='hero-title'>
            Welcome to <span>MEECO</span>
          </h2>
          <p className='hero-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            molestias?
          </p>
        </div>
      </div>
    );
  }
}

export default Hero;
