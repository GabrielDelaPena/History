import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="home_page">
            <div>
                <img src="/History/images/NEW-ITEMS-ADDED-TO-SALE-JUNE-2021-L-1.jpg" className="img_header" alt="img_header" />
            </div>
            <div className="home_gallery">
                <Link to="/webshop">
                    <div className="home_image">
                        <img className="home_gallery_img" src="/images/home_page_1.jpg" alt="home_page_1" />
                        <div className="image_overlay">
                            <p className="image_text">Collections</p>
                        </div>
                    </div>
                </Link>
                <Link to="/webshop">
                    <div className="home_image">
                        <img className="home_gallery_img" src="/images/home_page_2.png" alt="home_page_2" />
                        <div className="image_overlay">
                            <p className="image_text">Collections</p>
                        </div>
                    </div>
                </Link>
                <Link to="/webshop">
                    <div className="home_image">
                        <img className="home_gallery_img" src="/images/home_page_3.jpg" alt="home_page_3" />
                        <div className="image_overlay">
                            <p className="image_text">Collections</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="intro">
                <div className="intro_texts">
                    <h3 className="title">About</h3>
                    <p className="text">
                        Fashion is part of the daily air and it changes all the time, with all the events.
                        Let your imagination be inspired and have a look at our clothing collections.
                    </p>
                    <Link to="/webshop" className="button">Collections</Link>

                </div>
                <div className="intro_texts">
                    <h3 className="title">Quote's</h3>
                    <p className="text">
                        You can even see the approaching of a revolution in clothes.
                        Let your self be inspired and have a look at our clothing collections.
                    </p>
                    <Link to="/webshop" className="button">Collections</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
