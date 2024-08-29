import gsap from "gsap";
import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroScene from "./HeroScene"
import logo from '/imgs/logo.svg'
import foreGround from '/imgs/foreground.png'
import heroBlur from "/imgs/heroBlur.png"
import background from "/imgs/heroBackground.png"
gsap.registerPlugin(ScrollTrigger);

export default function Hero()
{
    const [showCanvas, setShowCanvas] = useState(true)

    useEffect(()=>{
        ScrollTrigger.create({
            trigger: ".heroCanvas",
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
        <div className="hero">
            <img className="logo" src={logo} alt="logo" />
            {/* <img className="backgroun-img" src={background} alt="background" /> */}
            <div className="background"></div>
            <p>From gourmet chefs to home cooks, our olive oil is the go-to choice for those who value quality and flavor. Experience the difference in every drop—transform your meals, delight your taste buds, and nourish your body with our exceptional olive oil.</p>
            <button>Learn more</button>
            <img src={foreGround} alt="foreGround" className="foreground" />
            <img src={heroBlur} alt="heroBlur" className="hero-blur"></img>
            {/* <div className="gradient-overlay"></div> */}
            <div className="heroCanvas">
                {showCanvas && <HeroScene />}
            </div>
        </div>
    </>
}