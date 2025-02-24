import React from 'react';
import './home-page.css';
import design from './design.png'


const HomePage = () => {
  return (
        <div className='homePage'>
            <div className='homePage-top'>
                <div className='homePage-left'>
                    <div className='big-text'>
                        <p>At AIMS Lab, we use diverse neuroscientific methods—including neuroimaging, intracranial recordings, 
                            behavioral studies, and computational approaches—to understand how brain computations drive decisions and actions.
                        </p>
                        <p>Our core themes are neuroanatomy, neuroinformatics, neuromodulation, and neurosurgery (hence the name AIMS!), 
                            guided by a commitment to open science, reproducibility, and collaboration.
                        </p>
                        <p>We focus on translating our research into better treatments for neurological disorders. 
                            By integrating diverse data and grounding our work in neuroanatomy, we aim to improve patient care.
                             Our mission emphasizes transparency, reproducibility, and supporting the broader research community.
                        </p>
                        <p>We foster a welcoming, intellectually stimulating environment where everyone is respected and encouraged to contribute. 
                            Join us as we explore the brain and work to enhance the lives of those with neurological conditions.
                        </p>
                    </div>
                    <div className='slogan'>
                        NEUROANATOMY, NEUROINFORMATICS, NEUROMODULATION, NEUROSURGERY
                    </div>
                </div>`
                <div className='homePage-right'>
                    <div className='img-cont'>
                        <img src={design} alt='head-shot' className='design' />
                    </div>
                </div>
            </div>
            <div className='homePage-bottom'>

            </div>
        </div>
    
    );
};

export default HomePage;