import React from 'react';
import profile from '../../../images/Photo 2.jpg'
import './About.css'

const About = () => {
    return (
        <section className="w-100 p-md-5 p-sm-2 styleOfAbout" id="about">
            <div className="container mt-5 about-section d-flex flex-wrap">
                <div className="sectionAbout">
                </div>

                <div className="row aboutBox p-md-4 p-sm-1">
                    <div className="col-md-5 about-img d-flex justify-content-center">
                        <div className="about-img-border">
                            <img className="profileImage" src={profile} alt="" />
                        </div>

                    </div>

                    <div className="col-md-7 about-info text-justify">
                        <h1 className="section-heading my-3">About Me</h1>
                        <h4>MERN STACK DEVELOPER</h4>

                        <p><span>By conjoining hard work and hope you will get a name <strong>"Siddiky"</strong>.</span> I’m desirous to develop in a challenging workplace that welcomes innovative ideas and offers growth opportunities and a positive
environment as a leader or team member.</p>

                        <p>It’s my passion to work on real-time web applications using JavaScript (ES6,
React, Next) & Node.js is really awesome backend technology that I always prefer.</p>
                        <a className="btn btn-custom" href="#contact">HIRE ME</a>
                    </div>

                </div>
            </div>
        </section >
    );
};
export default About;