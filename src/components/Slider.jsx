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
                    <p>I am a loyal supporter of President Trump and I can say that these Trump MEDBED Cards are the real deal! I ordered 10 for my whole family’s health.</p>
                    </div>
                    <div className="testimonial">
                    <h3>Georgia</h3>
                    <p>I originally ordered only 1 Trump MEDBED Card, but I had to come back to order 5 more. My Friends were really happy when they healed all their diseases.</p>
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