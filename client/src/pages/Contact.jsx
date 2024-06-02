import ContactForm from '../components/ContactForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLaptop, faNetworkWired, faSquare } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <p className="separator"> ______
        <FontAwesomeIcon icon={faNetworkWired} />
        ______
        <FontAwesomeIcon icon={faLaptop} />
        ______
        <FontAwesomeIcon icon={faNetworkWired} />
        ______
      </p>

      <div className="contact-icons">
        <div className="icon-container">
          <a href="mailto:tydamon@hotmail.com" className="icon">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <p className='contact-text'>Email</p>
        </div>

        <div className="icon-container">
          <a href="https://github.com/sifzerda" className="icon">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <p className='contact-text'>GitHub</p>
        </div>

        <div className="icon-container">
          <a href="https://linkedin.com/in/troy-damon-7625392a3" className="icon">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <p className='contact-text'>LinkedIn</p>
        </div>

        <div className="icon-container">
          <a href="https://stackoverflow.com/users/23265266/td99999" className="icon">
            <FontAwesomeIcon icon={faStackOverflow} size="2x" />
          </a>
          <p className='contact-text'>Stack Overflow</p>
        </div>


      </div>

      <div className="blue-separator">
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
      </div>

      <div className="icon-container-red">
          <p className='contact-text-red'>Note: This is a working contact form and will submit your message to my email</p>
        </div>

      <div className="form-box">
        <ContactForm />
      </div>

      <div className="blue-separator">
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
        <FontAwesomeIcon icon={faSquare} className="blue-square" size="sm" />
      </div>



    </div>
  );
}
