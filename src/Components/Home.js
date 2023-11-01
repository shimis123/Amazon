import React from 'react'
import banner from "../Images/banner.png"
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>

            <img src={banner} alt="banner" className='home_image' />

            <div className="home_row">
                {/* product : id, title, price, rating, image */}
                <Product
                    id={1}
                    title="Apple 2021 MacBook Pro (16-inch/41.05 cm, M1 Max chip with 10core CPU and 32core GPU, 32GB RAM, 1TB SSD) - Silver"
                    price={329900}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61Y30DpqRVL._SL1500_.jpg"
                />


                <Product
                    id={2}
                    title="Apple iPhone 13 (128GB) - Starlight 7.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion"
                    price={329900}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61XO4bORHUL._SX679_.jpg"
                />
            </div>

            <div className="home_row">
                {/* product : id, title, price, rating, image */}
                <Product
                    id={3}
                    title="Echo Dot (3rd Gen) - Smart speaker with Alexa, compact size, loud sound & Bluetooth"
                    price={2599}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61IfOpQwIEL._SX679_.jpg"
                />


                <Product
                    id={4}
                    title="Global Grabbers Polyresin Sitting Buddha Idol Statue Showpiece for HomeDecor Decoration Gift Gifting Items-ORG_BLK-BS2-(00)"
                    price={399}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/91FwdCVfcJL._SX679_.jpg"
                />

                <Product
                    id={5}
                    title="Apple Magic Keyboard with Touch ID and Numeric Keypad US English - Silver ((for Mac Silicon Running macOS 11.4 or Later)"
                    price={17500}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71Yw0WfNfML._SX679_.jpg"
                />
            </div>

            <div className="home_row">
                {/* product : id, title, price, rating, image */}
                <Product
                    id={6}
                    title="Customise your Blue 24-inch iMac with Apple M1 chip Customise your Blue 24‑inch iMac with Apple M1 chip"
                    price={119500}
                    rating={5}
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-blue-cto-hero-202104?wid=1254&hei=1132&fmt=jpeg&qlt=90&.v=1617479508000"
                />

            </div>



        </div>
    )
}

export default Home
