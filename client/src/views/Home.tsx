import '../styles/home.css';
import logo from '../assets/logo.png';
import htmlLogo from '../assets/HTML5.svg';

function Home() {
  return (
    <div className="Home">
      <div className="welcomeSection">
        <h1>
          I am <span id="textName">Alban Marku</span>,
        </h1>
        <h1>applied computing graduate</h1>
        <button id="meButton" type="button">
          <strong>Learn more</strong>
        </button>
      </div>
      <div className="aboutMe">
        <h1>About</h1>
        <img id="profilePic" src={logo} alt="profile" />
        <p>
          I have been studying computing in Dundee University for the past four
          years. I enjoy exploring new technologies and solutions in the field.
          Currently, I am focusing on Javascript and React.js.
        </p>
        <p>Contact me for web development opportunities.</p>
        <div className="icons">
          <img className="logos" src={htmlLogo} alt="html5" />
        </div>
      </div>
      <div className="projectSection">
        <h1>projects go here</h1>
      </div>
      <div className="contactMe">
        <h1>details go here</h1>
      </div>
    </div>
  );
}

export default Home;
