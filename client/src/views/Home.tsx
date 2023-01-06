import ProjectCard from '../components/ProjectCard';
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

type ProjCont = {
  title: string;
};

function Home() {
  const pList: ProjCont[] = [{ title: 'lmao' }];

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
        <p className="blurb">
          I have been studying computing in Dundee University for the past four
          years. I enjoy exploring new technologies and solutions in the field.
          Currently, I am focusing on Javascript and React.js.
        </p>
        <p className="blurb">Contact me for web development opportunities.</p>
        <div className="icons">
          <div className="logos">
            <img src={htmlLogo} alt="html5" />
            <p>HTML</p>
          </div>
          <div className="logos">
            <img src={csslogo} alt="css" />
            <p>CSS</p>
          </div>
          <div className="logos">
            <img src={expresslogo} alt="express" />
            <p>ExpressJS</p>
          </div>
          <div className="logos">
            <img src={jslogo} alt="js" />
            <p>Javascript</p>
          </div>
          <div className="logos">
            <img src={mongologo} alt="mongo" />
            <p>MongoDB</p>
          </div>
          <div className="logos">
            <img src={nodejslogo} alt="node" />
            <p>NodeJS</p>
          </div>
          <div className="logos">
            <img src={npmlogo} alt="npm" />
            <p>NPM</p>
          </div>
          <div className="logos">
            <img src={reactlogo} alt="react" />
            <p>ReactJS</p>
          </div>
          <div className="logos">
            <img src={tslogo} alt="ts" />
            <p>Typescript</p>
          </div>
          <div className="logos">
            <img src={webpacklogo} alt="webpack" />
            <p>Webpack</p>
          </div>
          <div className="logos">
            <img src={vitestLogo} alt="vitest" />
            <p>Vitest</p>
          </div>
          <div className="logos">
            <img src={gitLogo} alt="git" />
            <p>GitHub</p>
          </div>
        </div>
      </div>
      <div className="projectSection">
        <h1>projects go here</h1>
        {pList.map((obj) => (
          <ProjectCard key={obj.title} title={obj.title} />
        ))}
      </div>
      <div className="contactMe">
        <h1>details go here</h1>
      </div>
    </div>
  );
}

export default Home;
