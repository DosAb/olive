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

    function get1Liter(){
        setProduct("liter")
    }
    function get1LiterTin()
    {
        setProduct("1lterTin")
    }
    function get5LTin()
    {
        setProduct("5literTin")
    }
    function get750ml()
    {
        setProduct("750ml")
    }
    function get5l()
    {
        setProduct("5l")
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
        <h1 className="our-products">Our products</h1>
        <div className="products__container">
            <div className="canvas">
                {showCanvas && <Experience />}
            </div>
            <div className="products__description">
                <h5>quality & certifications</h5>
                <h3>5 liter tin oil</h3>
                <p>Indulge in the rich, authentic taste of our premium extra virgin olive oil, now available in a convenient 5-liter tin. Sourced from the finest olives, this oil boasts a robust flavor profile with a perfect balance of fruity and peppery notes. Ideal for cooking, drizzling over salads, or dipping with fresh bread, our olive oil is cold-pressed to preserve its natural nutrients and antioxidants. The 5-liter tin ensures freshness and is perfect for both home use and professional kitchens, offering exceptional quality in every drop.</p>
                <button>learn more</button>
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
    </>
}
