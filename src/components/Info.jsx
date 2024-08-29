import firstImage from "/imgs/firstimage.png"
import secondimage from "/imgs/secondProduct.png"
import firstOil from "/imgs/oilImg1.png"
import secondOil from "/imgs/oilImg2.png"


export default function Info()
{
    return <>
        <div className="first-product">
            <div className="info">
                <h2>we know what makes great olives</h2>
                <p>Unlock the secret to a healthier lifestyle with the magic of olive oil. Known as "liquid gold," olive oil is more than just a cooking ingredient—it's a symbol of wellness, tradition, and flavor. Packed with powerful antioxidants and heart-healthy fats, this versatile oil elevates every dish, from crisp salads to savory pastas.</p>
            </div>
            <img src={firstImage} alt="firstImage" />
        </div>
        <div className="second-product">
            <img src={secondimage} alt="firstImage" />
            <div className="info">
                <h2>experts by choice, quality by tradition</h2>
                <p>Whether you're drizzling it over fresh vegetables or using it as the base for your favorite marinades, olive oil enhances the taste of your food while nourishing your body. Choose extra virgin olive oil for its superior quality and rich, robust flavor, and experience the essence of the Mediterranean diet with every drop.</p>
            </div>
        </div>
        <div className="oil-section">
            <div className="oil-info">
                <div className="first-section">
                    <img src={firstOil} alt="firstOil" />
                    <h4>exclusive <br /> technologies</h4>
                    <p>All-Natural Goodness: 100% pure and free from additives or preservatives, offering you the best that nature has to offer.</p>
                </div>
                <div className="second-section">
                    <img src={secondOil} alt="firstOil" />
                    <h4>Fused <br /> olive oil</h4>
                    <p>Versatile & Delicious: Whether drizzled over salads, used in cooking, or as a dip for bread, our olive oil enhances the flavor of any dish with its smooth, fruity taste.</p>
                </div>
                <div className="oile-line"></div>
                <div className="oil-description">
                    <h2>we offer only premium olive oil</h2>
                    <p>Unlock the secret to a healthier lifestyle with our pure, premium olive oil—nature’s golden elixir. Sourced from the finest olive groves, our olive oil is cold-pressed to preserve its rich, robust flavor and health-boosting properties.</p>
                </div>
            </div>
        </div>
    </>
}