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
        <h1 className='testimonial-header'>Features</h1>
        <div className="testimonials">
            <div className="slider-wrapper">
            <div ref={testimonailRef} className="slider">
                <div className="testimonial">
                    <h3>Rich in Antioxidants</h3>
                    <p>Olive oil is packed with powerful antioxidants, which help protect the body from free radical damage and support overall health. These natural compounds contribute to its anti-inflammatory properties and are linked to numerous health benefits, including heart health and reduced risk of chronic diseases.</p>
                    {/* <img src={stars} alt="stars" /> */}
                    </div>
                    <div className="testimonial">
                    <h3>Versatile Culinary Use</h3>
                    <p>Olive oil’s versatile flavor profile makes it perfect for a wide range of culinary applications. Whether used in salad dressings, sautéing vegetables, marinating meats, or as a finishing touch on dishes, it enhances the taste of food with its smooth, fruity, and sometimes slightly peppery notes.</p>
                    {/* <img src={stars} alt="stars" /> */}
                    </div>
                    <div className="testimonial">
                    <h3>Cold-Pressed for Maximum Quality</h3>
                    <p>High-quality olive oils are typically cold-pressed, meaning they are extracted without the use of heat or chemicals. This process preserves the natural flavor and nutritional value of the olives, ensuring a pure, unadulterated product that delivers both taste and health benefits.</p>
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