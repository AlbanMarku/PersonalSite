import '../styles/home.css';
import logo from '../assets/logo.png';
import htmlLogo from '../assets/html5Logo.svg';
import csslogo from '../assets/cssLogo.svg';
import expresslogo from '../assets/expressLogo.svg';
import jslogo from '../assets/jsLogo.svg';
import mongologo from '../assets/mongodbLogo.svg';
import nodejslogo from '../assets/nodejsLogo.svg';
import npmlogo from '../assets/npmLogo.svg';
import reactlogo from '../assets/reactLogo.svg';
import tslogo from '../assets/typescriptLogo.svg';
import webpacklogo from '../assets/webpackLogo.svg';
import vitestLogo from '../assets/vitestLogo.svg';
import gitLogo from '../assets/githubLogo.svg';

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
          <div className="logos">
            <img src={htmlLogo} alt="html5" />
          </div>
          <div className="logos">
            <img src={csslogo} alt="html5" />
          </div>
          <div className="logos">
            <img src={expresslogo} alt="html5" />
          </div>
          <div className="logos">
            <img src={jslogo} alt="html5" />
          </div>
          <div className="logos">
            <img src={mongologo} alt="html5" />
          </div>
          <div className="logos">
            <img src={nodejslogo} alt="html5" />
          </div>
          <div className="logos">
            <img src={npmlogo} alt="html5" />
          </div>
          <div className="logos">
            <img src={reactlogo} alt="html5" />
          </div>
          <div className="logos">
            <img src={tslogo} alt="html5" />
          </div>
          <div className="logos">
            <img src={webpacklogo} alt="html5" />
          </div>
          <div className="logos">
            <img src={vitestLogo} alt="html5" />
          </div>
          <div className="logos">
            <img src={gitLogo} alt="html5" />
          </div>
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
