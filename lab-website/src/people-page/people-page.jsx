import React from 'react';
import './people-page.css';
import mackenzie from './pictures/mackenzie.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogleScholar, faTwitter, faOrcid} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';


const PeoplePage = () => {
  return (
        <div className='peoplePage'>
            <div className='people-heading'>Current Members</div>
            <div className="people-heading-wrapper">
                    <hr className="line" />
                <div className="people-heading-item">Principal Investigator</div>
            </div>
            <div className='section-cont'>
                <div className='person-cont'>
                    <div className='headshot-img-cont'>
                        <img src={mackenzie} alt='head-shot' className='head-shot' />
                    </div>
                    <div className='words-cont'>
                        <div className='person-name'>Mackenzie Snyder</div>
                        <div className='person-position'>Research Software Developer Co-op Student</div>
                        <div className='person-department'>Biomedical Engineering</div>
                        <div className='person-supervisor'>Co-supervised by Dr. Ali Khan</div>
                        <div className='social-cont'>
                        <div className='item-cont'>
                            <a href="https://www.linkedin.com/in/mackenzie-snyder-a92178220/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="icon-style" />
                            </a>
                            </div>
                            <div className="item-cont">
                            <a href="https://github.com/mackenziesnyder" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="icon-style" />
                            </a>
                            </div>
                            <div className="item-cont">
                            <a href="mailto:mackenziesnyder222@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} className="icon-style" />
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default PeoplePage;