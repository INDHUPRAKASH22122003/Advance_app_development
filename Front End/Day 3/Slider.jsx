import { useState, useEffect } from 'react';
import './Slider.css'
const AutomaticSlideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const showSlides = () => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    setSlideIndex((prevIndex) => (prevIndex >= slides.length - 1 ? 0 : prevIndex + 1));
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
  };

  useEffect(() => {
    const interval = setInterval(showSlides, 4000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 5</div>
          <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg" style={{ width: '100%',height:'70vh' }} />
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 5</div>
          <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFydHl8ZW58MHx8MHx8fDA%3D" style={{ width: '100%', height:'70vh' }} />
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 5</div>
          <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?cs=srgb&dl=pexels-sebastian-ervi-1763075.jpg&fm=jpg" style={{ width: '100%', height:'70vh' }} />
        </div>

        <div className="mySlides fade">
          <div className="numbertext">4 / 5</div>
          <img src="https://s1.1zoom.me/big3/456/Christmas_Holidays_Champagne_Stemware_Balls_Bottle_538616_3300x2200.jpg" style={{ width: '100%', height:'70vh' }} />
        </div>
        
        <div className="mySlides fade">
          <div className="numbertext">5 / 5</div>
          <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" style={{ width: '100%', height:'70vh' }} />
        </div>
        {/* <span className="dot" onClick="currentSlide(1)"></span> 
        <span className="dot" onClick="currentSlide(2)"></span> 
        <span className="dot" onClick="currentSlide(3)"></span>  */}
      </div>
    </>
  );
};

export default AutomaticSlideshow;
