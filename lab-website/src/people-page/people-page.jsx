import React, { useState } from 'react';
import './people-page.css';
import mackenzie from './pictures/mackenzie.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogleScholar, faXTwitter, faOrcid} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

// Sample data for people
const peopleData = {
  "Principal Investigator": [
    {
      name: "Mackenzie Snyder",
      position: "Research Software Developer Co-op Student",
      department: "Biomedical Engineering",
      supervisor: "Co-supervised by Dr. Ali Khan",
      img: mackenzie,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/mackenzie-snyder-a92178220/",
        github: "https://github.com/mackenziesnyder",
        email: "mailto:mackenziesnyder222@gmail.com",
      }
    }
  ],
  "PhD Students": [
    {
      name: "Mackenzie Snyder",
      position: "Research Software Developer Co-op Student",
      department: "Biomedical Engineering",
      supervisor: "Co-supervised by Dr. Ali Khan",
      img: mackenzie,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/mackenzie-snyder-a92178220/",
        github: "https://github.com/mackenziesnyder",
        email: "mailto:mackenziesnyder222@gmail.com",
      }
    }
  ],
  "Masters Students": [
    {
        name: "Mackenzie Snyder",
      position: "Research Software Developer Co-op Student",
      department: "Biomedical Engineering",
      supervisor: "Co-supervised by Dr. Ali Khan",
      img: mackenzie,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/mackenzie-snyder-a92178220/",
        github: "https://github.com/mackenziesnyder",
        email: "mailto:mackenziesnyder222@gmail.com",
        }
    }
  ],
  "Lab Members": [
    {
      name: "Mackenzie Snyder",
      position: "Research Software Developer Co-op Student",
      department: "Biomedical Engineering",
      supervisor: "Co-supervised by Dr. Ali Khan",
      img: mackenzie,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/mackenzie-snyder-a92178220/",
        github: "https://github.com/mackenziesnyder",
        email: "mailto:mackenziesnyder222@gmail.com",
      },
      bio: " I am a research software developer co-op student in the lab and I am a biomedical engineering undergraduate student from the University of Waterloo. My work in the lab consists of assisting and contributing to various lab software projects in the field of computational neuro imaging.",
    }
  ]
};

const PeoplePage = () => {
   
    const [selectedPerson, setSelectedPerson] = useState(null);

    const openModal = (person) => {
        setSelectedPerson(person);
    };

    const closeModal = () => {
        setSelectedPerson(null);
    };
  
    return (
    <div className='peoplePage'>
      <div className='people-heading'>Current Members</div>
      {Object.entries(peopleData).map(([section, members]) => (
        <div key={section}>
          <div className="people-heading-wrapper">
            <hr className="line" />
            <div className="people-heading-item">{section}</div>
          </div>
          <div className='section-cont'>
            {members.map((person, index) => (
              <div className='person-cont' key={index}>
                <div className='headshot-img-cont'>
                  <img src={person.img} alt={`${person.name} headshot`} className='head-shot' />
                </div>
                <div className='words-cont'>
                  <div className='person-name' onClick={() => openModal(person)}>
                    {person.name}
                  </div>
                  <div className='person-position'>{person.position}</div>
                  <div className='person-department'>{person.department}</div>
                  <div className='person-supervisor'>{person.supervisor}</div>
                  <div className='social-cont'>
                    {person.socialLinks && Object.entries(person.socialLinks).map(([key, link]) => (
                        link && ( // Ensure the link exists before rendering
                            <div className="item-cont" key={key}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon 
                                icon={
                                    key === "email" ? faEnvelope :
                                    key === "github" ? faGithub :
                                    key === "linkedin" ? faLinkedin :
                                    key === "orcid" ? faOrcid :
                                    key === "google_scholar" ? faGoogleScholar :
                                    key === "twitterx" ? faXTwitter:
                                    faLink
                                } 
                                className="icon-style" 
                                />
                            </a>
                            </div>
                        )
                        ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {selectedPerson && (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>✖</button>
            <div className="modal-header">
                <img src={selectedPerson.img} alt={`${selectedPerson.name} headshot`} className="modal-image" />
                <div className='modal-name'>{selectedPerson.name}</div>
            </div>

            {/* Details */}
            <div className="modal-body">
                <div><strong>Position:</strong> {selectedPerson.position}</div>
                <div><strong>Department:</strong> {selectedPerson.department}</div>
                <div><strong>Supervisor:</strong> {selectedPerson.supervisor}</div>
                
                {selectedPerson.socialLinks && Object.keys(selectedPerson.socialLinks).length > 0 && (
                <div className="social-links">
                    {selectedPerson.socialLinks.email && (
                    <div><strong>Email:</strong> <a href={selectedPerson.socialLinks.email} target="_blank" rel="noopener noreferrer">Email</a></div>
                    )}
                    {selectedPerson.socialLinks.github && (
                    <div><strong>GitHub:</strong> <a href={selectedPerson.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a></div>
                    )}
                    {selectedPerson.socialLinks.linkedin && (
                    <div><strong>LinkedIn:</strong> <a href={selectedPerson.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                    )}
                    {selectedPerson.socialLinks.google_scholar && (
                    <div><strong>Google Scholar:</strong> <a href={selectedPerson.socialLinks.google_scholar} target="_blank" rel="noopener noreferrer">Google Scholar</a></div>
                    )}
                    {selectedPerson.socialLinks.orcid && (
                    <div><strong>Orcid:</strong> <a href={selectedPerson.socialLinks.orcid} target="_blank" rel="noopener noreferrer">Orcid</a></div>
                    )}
                    {selectedPerson.socialLinks.twitterx && (
                    <div><strong>X:</strong> <a href={selectedPerson.socialLinks.twitterx} target="_blank" rel="noopener noreferrer">X</a></div>
                    )}
                </div>
                )}
                <div className='about-section'><strong>About:</strong> {selectedPerson.bio}</div>
            </div>
            </div>
        </div>
        )}
    </div>
  );
};

export default PeoplePage;
