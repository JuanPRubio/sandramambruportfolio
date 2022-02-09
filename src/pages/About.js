import React from 'react';
import AboutImg from "../images/about.jpg";
import CV from "../assets/vanessapetitcv.pdf";
import { UilDownloadAlt } from '@iconscout/react-unicons'

function About() {
    return (
        <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                <p className="about__description">
                A solid multi-cultural culinary career. 
                </p>
                <div className="about__info">
                    <div>
                        <span className="about__info-title">15+</span>
                        <span className="about__info-name">Years <br/> in a big compay</span>
                    </div>
                    
                    <div>
                        <span className="about__info-title">10+</span>
                        <span className="about__info-name">Years <br/> beign an entrepreneur</span>
                    </div>

                    <div>
                        <span className="about__info-title">15+</span>
                        <span className="about__info-name">Years <br/> learning foregin culinary cultures</span>
                    </div>
                </div>

                <div className="about__buttons">
                    <a download="vanesssapetitcv" href="/home" className="button button--flex">
                    Download CV<UilDownloadAlt className="button__icon" />
                    </a>
                </div>
            </div>
        </div>
        </section>
    )
}

export default About
