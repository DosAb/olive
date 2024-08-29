import Hero from "./hero/Hero"
import Slider from "./components/Slider"
import Products from "./Products"
import Info from "./components/Info"
import Footer from "./components/Footer"

export default function Application()
{
    return <>
        <Hero />
        <Products />
        <Slider />
        <Info />
        <Footer />
    </>
}
