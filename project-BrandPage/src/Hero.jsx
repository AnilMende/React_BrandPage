const HeroSection = () => {
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP WITH OUR SHOES.</p>

                <div className="hero-buttons">
                    <button className="primary-btn">Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shop-here">
                    <p>Also Available On</p>

                    <div className="online-stores">
                        <img src="/Images/flipkart.png" alt="amazon" />
                        <img src="/Images/amazon.png" alt="flipkart" />
                    </div>
                </div>

            </div>



            <div className="hero-image">
                <img src="/Images/shoe_image.png" alt="shoe" />
            </div>

        </main>
    )
}

export default HeroSection