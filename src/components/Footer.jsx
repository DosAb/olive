import logo from "/imgs/website-logo.png"
import facebook from "/imgs/facebook.svg"
import twitter from "/imgs/twitter.svg"
import youtube from "/imgs/youtube.svg"
import phone from "/imgs/phone.svg"

export default function Footer()
{
    return <>
        <div className="footer">
            <div className="footer-column">
                <img className="footer-logo" src={logo} alt="logo" />
                <p>Terla our company is inspired by its irish unique word that means "trading" or "commerce".</p>
                <div className="social-media">
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={youtube} alt="youtube" />
                </div>
            </div>
            <div className="footer-column">
                <h4>Navigation</h4>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Products</a>
                <a href="">Contact Us</a>
            </div>
            <div className="footer-column">
                <h4>Quick Link</h4>
                <a href="">Baby care & formula</a>
                <a href="">Drink & beverages</a>
                <a href="">Dairy products</a>
                <a href="">Sweets & Confectioneries</a>
                <a href="">Tea & Coffe</a>
                <a href="">Detergent & Fabric Care</a>
                <a href="">Groceries, Pasta & Snacks</a>
            </div>
            <div className="footer-column last-column">
                <h4>Work Hours</h4>
                <p>Mon – Sat : 9.00AM – 6.00PM</p>
                <p>Unit 8, Keltic Business Centre, Listowel, Clieveragh Industrial Estate, Co. Kerry, V31 Y727 Ireland</p>
                <a className="call-link" href=""><img src={phone} alt="phone" />Call Us</a>
            </div>
        </div>
    </>
}