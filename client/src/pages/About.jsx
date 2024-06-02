import profilePic from '../assets/propic.jpg';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSquare, faLaptop, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

export default function About () {
  return (
    <div>
      <h3 className="thanks">Thanks for stopping by!</h3>
      <h1>About Me</h1>

      <p className="separator"> ______
        <FontAwesomeIcon icon={faUser} />
        ______
        <FontAwesomeIcon icon={faLaptop} />
        ______
        <FontAwesomeIcon icon={faNetworkWired} />
        ______
      </p>

      <img className="profile-picture" src={profilePic} alt="Profile"  />

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

      <p className='portfolio-bio'>
      I am a Web Development bootcamp student at Monash University, and aspiring Web Developer and coder. 
      In my spare time I love reading, writing, arts, swimming and music. As someone keen to pursue a career in tech, I enjoy using my creativity, attention to detail, 
      and passion for learning to advance in the tech world and achieve outcomes that make a 
      difference.
      </p>

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
