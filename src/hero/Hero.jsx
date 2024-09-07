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
            <h1 className="hero-title">Olive oil</h1>
            {/* <img className="backgroun-img" src={background} alt="background" /> */}
            <div className="background"></div>
            <p>Nostro Olive Oil. It's more than just cooking, it's a taste of good life, Si!
Nostro Pomace Olive Oil. Crafted from the finest olive pomace,
balance of flavor and nutrition authentic flavors of Portuguese cuisine to your table. 
Each bottle is a testament to the rich culinary traditions of Portugal,
Rich, earthy taste.</p>
            
            <a href="#products"><button>Discover</button></a>
            {/* <div className="heroCanvas">
                {showCanvas && <HeroScene />}
            </div> */}
        </div>
    </>
}