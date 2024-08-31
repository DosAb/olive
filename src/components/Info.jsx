import firstImage from "/imgs/firstimage.png"
import secondimage from "/imgs/secondProduct.png"
import firstOil from "/imgs/oilImg1.png"
import secondOil from "/imgs/oilImg2.png"


export default function Info()
{
    return <>
        <div id="info" className="first-product">
            <div className="info">
                <h2>Do you know ? </h2>
                <p>Portugal olive oil is renowned for being the best quilty globaly 
Portugal set to become third largest olive oil producer in the world by 2026 ! Si!</p>
            </div>
            <img src={firstImage} alt="firstImage" />
        </div>
        <div className="second-product">
            <img src={secondimage} alt="firstImage" />
            <div className="info">
                <h2>This olive oil is going to make everything taste amazing!"</h2>
                <p>Nostro Olive Oil. It's more than just cooking, it's a taste of good life</p>
            </div>
        </div>
        <div className="oil-section">
            <div className="oil-info">
                <div className="first-section">
                    <img src={firstOil} alt="firstOil" />
                    <h4>Nostro is <br />perfect for:</h4>
                    <p>ideal for frying your favorite foods without burning or compromising flavor. Oven cooking: Drizzle or brush nostro on vegetables, meats, or fish before roasting or baking for a touch of olive flavor and moisture. Seasoning: Add a subtle richness to salads, dressings, and marinades</p>
                </div>
                <div className="second-section">
                    <img src={secondOil} alt="firstOil" />
                    <h4>Fused <br /> olive oil</h4>
                    <p>Versatile & Delicious: Whether drizzled over salads, used in cooking, or as a dip for bread, our olive oil enhances the flavor of any dish with its smooth, fruity taste.</p>
                </div>
                <div className="oile-line"></div>
                <div className="oil-description">
                    <h2>Contact Us</h2>
                    <h3>ARD ALJANOOB TRADING LLC</h3>
                    <p><span>Addres</span>:  Iraq Baghdad</p>
                    <p><span>Phone</span>:  07766016661  /  07749902029</p>
                    <p><span>Email</span>:  info@ardaljanoob.com  /  info@terla.ie</p>
                </div>
            </div>
        </div>
    </>
}