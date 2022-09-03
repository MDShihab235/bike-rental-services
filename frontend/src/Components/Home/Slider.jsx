import React from 'react';
import {Button, Carousel} from 'react-bootstrap'
import img1 from '../../image/picture-1.jpg'
import img2 from '../../image/picture-2.jpg'
import img4 from '../../image/picture-4.jpg'
import './Slider.css'

const Slider = () => {
        
    return (
      <div >
  
      <Carousel fade interval={3000} className="carousel">
  <Carousel.Item >
    <img
   
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>

     <div className="carousel-caption-1">
     <h1>Home &amp; Business  Waste Pickup  Solution</h1>
      <p>Over be that spoken the bore lost. As some no shadows feather core. Little and shadows till dreary more of nevermore, gently thy lenore soul felt and i and take.</p>
      <button>Learn More</button>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <div className="carousel-caption-2">
    <h1>Your Clutter Is &amp; Our Bread  Butter </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestias dolores ipsam laudantium temporibus a libero explicabo, quibusdam harum iure.</p>
      <button>Learn More</button>
    </div>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
         
      src={img4}
      alt="Third slide"
    />

    <Carousel.Caption>
   <div  className="carousel-caption-1">
      <h1 >We Are The Leader <br/> In Cleaning Company</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam corrupti impedit commodi tempora obcaecati quo sequi, vitae qui placeat natus.</p>
      <button>Learn More</button>
      
   </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>    
</div>
    );
  }
  
export default  Slider;