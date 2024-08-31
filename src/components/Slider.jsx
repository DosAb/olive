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
        <h1 className='testimonial-header'>Benefits</h1>
        <div className="testimonials">
            <div className="slider-wrapper">
            <div ref={testimonailRef} className="slider">
                <div className="testimonial">
                    <h3>Affordable</h3>
                    <p>Enjoy the benefits of olive oil at a budget-friendly price. Experience the taste of Portugal in every drop.</p>
                    {/* <img src={stars} alt="stars" /> */}
                    </div>
                    <div className="testimonial">
                    <h3>Heart-Healthy</h3>
                    <p>Packed with monounsaturated fats, promoting a healthy heart.</p>
                    {/* <img src={stars} alt="stars" /> */}
                    </div>
                    <div className="testimonial">
                    <h3>Versatility in Cooking and Beauty</h3>
                    <p>Olive oil is highly versatile, suitable for various culinary uses such as sautéing, baking, and salad dressings.</p>
                    {/* <img src={stars} alt="stars" /> */}
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