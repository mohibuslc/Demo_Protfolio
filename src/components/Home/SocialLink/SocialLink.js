import React from 'react';
import './SocialLink.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


const SocialLink = () => {
    return (
        <div>
            <div className="socialLinkItems">
                <a target="_blank" href="https://github.com/NA-Siddiky">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>

            <div className="socialLinkItems">
                <a target="_blank" href={"https://www.linkedin.com/in/na-siddiky/"}> <FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </div>

    );
};

export default SocialLink;