import React, { useState } from 'react';
import './FeedBack.module.css';

function FeedBack() {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? 2 : slideIndex - 1);
  };

  const nextSlide = () => {
    setSlideIndex(slideIndex === 2 ? 0 : slideIndex + 1);
  };

  const selectSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="slider">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        <div className="slide">Slide 1</div>
        <div className="slide">Slide 2</div>
        <div className="slide">Slide 3</div>
        <div className="slide">Slide 1</div>
        <div className="slide">Slide 2</div>
        <div className="slide">Slide 3</div>
        <div className="slide">Slide 1</div>
        <div className="slide">Slide 2</div>
        <div className="slide">Slide 3</div>
      </div>
      <button onClick={prevSlide} className="slider-button left">
        &lt;
      </button>
      <button onClick={nextSlide} className="slider-button right">
        &gt;
      </button>
      <div className="slider-dots">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            onClick={() => selectSlide(index)}
            className={`slider-dot ${slideIndex === index ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default FeedBack;
