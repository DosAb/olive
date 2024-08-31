import gsap from "gsap";
import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useProduct from './stores/useProduct'
gsap.registerPlugin(ScrollTrigger);

import Experience from './scene/Experience'
import img1lMar from "/imgs/1l-mar.png"
import img750ml from "/imgs/750ml.png"
import img5lTin from "/imgs/5l-tin.png"
import img5l from "/imgs/5l.png"
import img1lTin from "/imgs/1l-tin.png"

export default function Products()
{
    const setProduct = useProduct((state) => state.setProduct);
    let text5L = "Indulge in the rich, authentic taste of our premium extra virgin olive oil, now available in a convenient 5-liter tin. Sourced from the finest olives, this oil boasts a robust flavor profile with a perfect balance of fruity and peppery notes. Ideal for cooking, drizzling over salads, or dipping with fresh bread, our olive oil is cold-pressed to preserve its natural nutrients and antioxidants. The 5-liter tin ensures freshness and is perfect for both home use and professional kitchens, offering exceptional quality in every drop."
    let text1L = "1 liter text"
    let text750ml = "750Ml text"
    let text5LMar = "5l text"
    let text1LTin = "1l tin text"

    const [oilText, setOilText] = useState(text5L)
    const [oilHeading, setOilHeading] = useState("5 Liter Tin Oil")

    function get1Liter(){
        setProduct("liter")
        setOilText(text1L)
        setOilHeading("1 Liter Oil")
    }
    function get1LiterTin()
    {
        setProduct("1lterTin")
        setOilText(text1LTin)
        setOilHeading("1 Liter tin Oil")
    }
    function get5LTin()
    {
        setProduct("5literTin")
        setOilText(text5L)
        setOilHeading("5 Liter Tin Oil")
    }
    function get750ml()
    {
        setProduct("750ml")
        setOilText(text750ml)
        setOilHeading("750ml Oil")
    }
    function get5l()
    {
        setProduct("5l")
        setOilText(text5LMar)
        setOilHeading("5l Oil")
    }

    const [showCanvas, setShowCanvas] = useState(true)

    useEffect(()=>{
        ScrollTrigger.create({
            trigger: ".products__container",
            start: "top top",
            end: `bottom 100px`,
            markers: false,
            onLeave: () => {
                setShowCanvas(false)
            },
            onEnterBack: () => {
                setShowCanvas(true)
            }
        })
    },[])

    return <>
    <div id="products" className="product">
        <h1 className="our-products">Our products</h1>
        <div className="products__container">
            <div className="canvas">
                {showCanvas && <Experience />}
            </div>
            <div className="products__description">
                <h5>quality & certifications</h5>
                <h3>{oilHeading}</h3>
                <p>from Portugal into Your kitchens.
Discover the authentic flavors of Portugal with Nostro Pomace Olive Oil. Crafted from the finest olive pomace, this exquisite 
blend offers a harmonious balance of flavor and nutrition.
Our Pomace olive oil blend, ideal for everyday cooking. Our Nostro oil is crafted from the heart of Portugal using a combination of 
blended pomace oil, ensuring a light and balanced flavor that complements a variety of dishes.</p>
                <a href="#info">
                    <button>learn more</button>
                </a>
            </div>
        </div>
        <h2 className='product__title'>Choose product to view</h2>
        <div className="products__select">
            <div onClick={get1Liter} className="product__img">
                <img src={img1lMar} alt="1l" />
            </div>
            <div onClick={get750ml} className="product__img">
                <img src={img750ml} alt="750ml" />
            </div>
            <div onClick={get5LTin} className="product__img">
                <img src={img5lTin} alt="5l-tin" />
            </div>
            <div onClick={get5l} className="product__img">
                <img src={img5l} alt="5l" />
            </div>
            <div onClick={get1LiterTin} className="product__img">
                <img src={img1lTin} alt="1l-tin" />
            </div>
        </div>
    </div>
    </>
}
