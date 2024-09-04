import Hero from "./hero/Hero"
import Slider from "./components/Slider"
import Products from "./Products"
import Info from "./components/Info"
import Footer from "./components/Footer"
import Features from "./components/Features"
import Section from "./components/Section"

export default function Application()
{
    return <>
        <Hero />
        <Products />
        <Slider />
        <Features />
        <Info />
        <Section />
        <Footer />
    </>
}
