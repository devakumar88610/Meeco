import react from 'react';
import Image from '../Images/image1.jpg';

class Hero extends react.Component {
  render() {
    return (
      <div>
        <img src={Image} className='d-block w-100' alt='...'></img>
      </div>
    );
  }
}

export default Hero;
