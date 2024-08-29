import leftArrow from "/imgs/arrowRight.svg"
import rightArrow from "/imgs/arrowLeft.svg"
import stars from "/imgs/stars.svg"

import { useRef } from 'react'

export default function Slider()
{
    const testimonailRef = useRef()

    let countSlider = 0

    const testimonialBtnClick = ()=>{
      const sliderWidth = testimonailRef.current.parentNode.offsetWidth
      countSlider += 1
      countSlider = countSlider % 3
      console.log(countSlider);
      testimonailRef.current.style.transform = 'translateX(' + countSlider * (-sliderWidth) + 'px)'
    }
    const testimonialBtnClickBack = ()=>{
      const sliderWidth = testimonailRef.current.parentNode.offsetWidth
      countSlider -= 1
      countSlider = (countSlider % -3)
      if(countSlider < 0)
      {
        countSlider = 2
      }
      console.log(countSlider);
      testimonailRef.current.style.transform = 'translateX(' + (countSlider) * (-sliderWidth) + 'px)'
    }
    return (
    <div>
        <h1 className='testimonial-header'>Testimonials</h1>
        <div className="testimonials">
            <div className="slider-wrapper">
            <div ref={testimonailRef} className="slider">
                <div className="testimonial">
                    <h3>Phill</h3>
                    <p>I've been using this olive oil for months, and it has completely transformed my cooking! The rich, smooth flavor enhances every dish, and knowing it's packed with healthy fats and antioxidants makes it even better.</p>
                    <img src={stars} alt="stars" />
                    </div>
                    <div className="testimonial">
                    <h3>Louise</h3>
                    <p>Knowing that I'm using a pure, natural product makes me feel good about what I'm serving my family. This olive oil has truly become a staple in my kitchen</p>
                    <img src={stars} alt="stars" />
                    </div>
                    <div className="testimonial">
                    <h3>Georgia</h3>
                    <p>I've tried many different olive oils over the years, but this one stands out as the best by far. The first thing you notice is the fresh, aromatic scent that hints at the quality and care put into every bottle</p>
                    <img src={stars} alt="stars" />
                </div>
            </div>
            </div>
            <div className="testimonial-btn">
            <button onClick={testimonialBtnClickBack} ><img src={leftArrow} alt="leftArrow" /></button>
            <button onClick={testimonialBtnClick}><img src={rightArrow} alt="rigthArrow" /></button>
            </div>
        </div>
    </div>
    )
}