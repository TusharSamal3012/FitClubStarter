import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const hero = () => {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <>
            <div className="hero" id='hero'>
                <div className="blur hero-blur"></div>
                <div className="left-h">
                    <Header />
                    {/* THE BEST AD */}
                    <div className="the-best-ad">
                        <motion.div initial={{ left: mobile ? "165px" : "238px" }}
                            whileInView={{ left: '8px' }}
                            transition={{ ...transition, type: 'tween' }}>

                        </motion.div>
                        <span>the best fitness club in the town</span>
                    </div>
                    {/* HERO HEADING */}
                    <div className="hero-text">
                        <div>
                            <span className='stroke-text'>Shape </span>
                            <span>Your</span>
                        </div>
                        <div><span>Ideal Body</span></div>
                        <div>
                            <span>IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY SO THAT YOU CAN LIVE YOUR LIFE TO THE FULLEST</span>
                        </div>
                    </div>
                    {/* FIGURES */}
                    <div className="figures">
                        <div>
                            <span>
                                <NumberCounter end={140} start={100} delay='4' prefix="+" />
                            </span>
                            <span>expert coaches</span>
                        </div>
                        <div>
                            <span>
                                <NumberCounter end={978} start={900} delay='4' prefix="+" />
                            </span>
                            <span>members joined</span>
                        </div>
                        <div>
                            <span><NumberCounter end={50} start={20} delay='2' prefix="+" /></span>
                            <span>fitness programs</span>
                        </div>
                    </div>
                    {/* HERO BUTTONS */}
                    <div className="hero-buttons">
                        <buttons className='btn'>Get Started</buttons>
                        <buttons className='btn'>Learn More</buttons>
                    </div>
                </div>
                <div className="right-h">
                    <button className='btn'>Join Now</button>
                    <motion.div transition={transition} whileInView={{ right: "4rem" }} initial={{ right: "-1rem" }}
                        className="heart-rate">
                        <img src={Heart} alt="" />
                        <span>Heart Rate</span><span>116 BPM</span>
                    </motion.div>
                    {/* HERO IMAGES */}
                    <img src={hero_image} alt="" className='hero-image' />
                    <motion.img initial={{ right: "11rem" }} whileInView={{ right: '20rem' }} transition={transition}
                        src={hero_image_back} alt="" className='hero-image-back' />
                    {/* CALORIES */}
                    <motion.div className="calories" initial={{ right: '37rem' }}
                        whileInView={{ right: '28rem' }}
                        transition={transition}>
                        <img src={Calories} alt="" />
                        <div>
                            <span>Calories Burned</span>
                            <span>220 KCAL</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default hero