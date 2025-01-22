
import Header from '../components/Header';
import Footer from '../components/Footer';
import deer from '../assets/images/deer.jpg';
import lion from '../assets/images/lion.jpg';
import elephant from '../assets/images/elephant.jpg';
import flyingbird from '../assets/images/flyingbird.jpg';
import './home.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState, useRef } from 'react';

const Home = () => {
    let sliderRef = useRef(null);

    const ImageArray = [deer, lion, elephant, flyingbird];

    const CallArrow = (dir) => {

        if (sliderRef && dir == "Prev") {
            sliderRef.slickPrev();
        }
        if (sliderRef && dir == "next") {
            sliderRef.slickNext();
        }
    }
    const CustomPrevArrow = (props) => {
        const { dir } = props;
        return <button type="button" data-role="none" className="slick-arrow slick-prev" style={{ display: 'block' }} onClick={() => CallArrow(dir)} > Previous</button>

    };
    const Customnextarrow = (props) => {
        const { dir } = props;
        return <button type="button" data-role="none" class="slick-arrow slick-next" style={{ display: 'block' }} onClick={() => CallArrow(dir)}> Next</button>

    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        swipeToSlide: true,
        swipe: true,
        centerMode: false,
        className: "slider",
        // prevArrow: <CustomPrevArrow dir="Prev" />,
        // nextArrow: <Customnextarrow dir="next" />,

    };

    return (
        <>
            <div className="home-header">
                <Header />
            </div>

            <div className="home-container">
                {/* Hero Section */}
                <section className="hero-section animate fade-in">
                    <h1 className="hero-title">
                        Welcome to <span>Wildlife Explorer</span>!
                    </h1>
                    <p className="hero-subtitle">
                        Dive into the wonders of the wild and explore the beauty of nature like never before.
                    </p>
                    <a href="/forestexplorer" className="explore-btn">Explore Forests</a>
                </section>

                {/* Facts Section */}
                <section className="facts-section animate slide-up">
                    <h2>Did You Know?</h2>
                    <ul>
                        <li>
                            <strong>Forests cover 31%</strong> of Earth's land area and are home to over 80% of terrestrial species.
                        </li>
                        <li>
                            The Amazon Rainforest produces <strong>20% of the world's oxygen</strong>.
                        </li>
                        <li>
                            Deforestation contributes to <strong>15% of global greenhouse gas emissions</strong>.
                        </li>
                        <li>
                            Some species, like the tiger and orangutan, are critically endangered due to habitat loss.
                        </li>
                    </ul>
                </section>

                <section className="wildlife-section animate zoom-in">
                    <h2>Explore the Diversity of Wildlife</h2>
                    <p>
                        From majestic elephants in the savannahs to vibrant birds in tropical forests, every corner of the Earth is brimming with life.
                    </p>
                    <div className="SldOtr">
                        <div className="slider">
                            <Slider {...settings}
                                ref={slider => {
                                    sliderRef = slider;
                                }}
                            >
                                {ImageArray.map((item, index) => {
                                    return (
                                        <div onClick={() => { }} key={index}>
                                            <div className="img-cntnr_sld" style={{ marginRight: "10px", marginLeft: "10px" }}>
                                                <img src={item} className="SldImgRdus" />
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </Slider>
                        </div>
                    </div>
                </section>

                <section className="cta-section animate slide-left">
                    <h2>Join the Adventure</h2>
                    <p>
                        Discover forests, wildlife, threats, and much more. Let’s start your adventure into the wild and make a difference for future generations.
                    </p>
                    <a href="/quiz" className="cta-btn">
                        Take the Wildlife Quiz
                    </a>
                </section>
                {/* <section className="cta-section animate zoom-in">
                    <h2>Join the Adventure</h2>
                    <p>
                        Discover forests, wildlife, threats, and much more. Let’s start your adventure into the wild and make a difference for future generations.
                    </p>
                    <a href="/forestexplorer" className="cta-btn">Start Exploring</a>
                </section> */}
            </div>

            <div className="home-footer">
                <Footer />
            </div>
        </>
    );
};


export default Home;