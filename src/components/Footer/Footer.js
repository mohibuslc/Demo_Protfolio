import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import './Footer.css'
import logo from '../../images/Logo_Short.png';


const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row g-0">
                    <div className="col-sm-12 col-md-6">
                        <p className="text-justify">I am here to help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><>Programing Language</></li>
                            <li><>Front End</></li>
                            <li><>Back End</></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><>About Me</></li>
                            <li><>Contact Me</></li>
                            <li><>Contribute</></li>
                            <li><>Privacy Policy</></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row g-0">
                    <div className="col-md-8 col-sm-6 col-xs-12">

                        <p className="copyright-text">
                            <a className="navbar-brand ps-6" href="#home"><img className='logoImg' src={logo} alt="" /></a>
                        Copyright &copy; 2021 All Rights Reserved by N.A Siddiky.
                       </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" target="_blank" href={"https://www.facebook.com/Siddiky.Juwel/"}><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a className="twitter" target="_blank" href={"https://twitter.com/NA_Siddiky"}><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a className="linkedin" target="_blank" href={"https://www.linkedin.com/in/na-siddiky/"}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;