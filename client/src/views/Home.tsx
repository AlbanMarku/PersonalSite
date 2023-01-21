import React, { useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ProjectCard from '../components/ProjectCard';
import '../styles/home.css';
import logo from '../assets/logo.png';
import man from '../assets/man.png';
import expresslogo from '../assets/expressLogo.svg';
import mongologo from '../assets/mongodbLogo.svg';
import reactlogo from '../assets/reactLogo.svg';
import tslogo from '../assets/typescriptLogo.svg';
import webpacklogo from '../assets/webpackLogo.svg';
import vitestLogo from '../assets/vitestLogo.svg';
import cvDemo from '../assets/cvDemo.png';
import invDemo from '../assets/tester.png';
import cartDemo from '../assets/cartDemo.png';
import weatherDemo from '../assets/weather.png';

type ProjCont = {
  title: string;
  image: string;
  appLink: string;
  repoLink: string;
};

type EmailInputs = {
  email: string;
  message: string;
};

function Home() {
  const { register, handleSubmit } = useForm<EmailInputs>();
  const [statusSent, setStatusSent] = useState('');
  const myRef = useRef<HTMLInputElement | null>(null);

  const handleScroll = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const pList: ProjCont[] = [
    {
      title: 'CV Creator',
      image: cvDemo,
      appLink: 'https://albanmarku.github.io/CvReact/',
      repoLink: 'https://github.com/AlbanMarku/CvReact',
    },
    {
      title: 'Inventory App',
      image: cvDemo,
      appLink: 'https://fullstackinventory.onrender.com/',
      repoLink: 'https://github.com/AlbanMarku/Inventory',
    },
    {
      title: 'Shopping Site',
      image: cvDemo,
      appLink: 'https://shoppingcart-uwe1.onrender.com',
      repoLink: 'https://github.com/AlbanMarku/ShoppingCart/tree/main/src',
    },
    {
      title: 'Weather App',
      image: cvDemo,
      appLink: 'https://albanmarku.github.io/WeatherApp/',
      repoLink: 'https://github.com/AlbanMarku/WeatherApp',
    },
  ];

  const onMessage: SubmitHandler<EmailInputs> = async (data) => {
    try {
      const response = await fetch('/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      setStatusSent('Email sent!');
    } catch (error) {
      console.log(error);
      setStatusSent('Failed to send email. Email me at albanmarku@outlook.com');
    }
  };

  return (
    <div className="Home">
      <div className="welcomeSection">
        <p>
          I am <span id="textName">Alban Marku</span>,
        </p>
        <p>Applied Computing graduate</p>
        <button onClick={handleScroll} id="meButton" type="button">
          <strong>Learn more</strong>
        </button>
      </div>
      <div ref={myRef} className="aboutMe">
        <h1>About</h1>
        <img id="profilePic" src={man} alt="profile" />
        <p className="blurb">
          I have been studying computing in Dundee University for the past four
          years. I enjoy exploring new technologies and solutions in the field.
          Currently, I am focusing on Javascript and React.js.
        </p>

        <p className="blurb">
          I specialise in front-end development, but I am also a capable backend
          developer.
        </p>

        <p className="blurb">Contact me for web development opportunities.</p>
        <div className="icons">
          <div className="logos">
            <img src={expresslogo} alt="express" />
            <p>ExpressJS</p>
          </div>
          <div className="logos">
            <img src={mongologo} alt="mongo" />
            <p>MongoDB</p>
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
        </div>
      </div>
      <div className="projectSection">
        <h1>My projects</h1>
        <div className="description">
          <p>
            Below are some projects I have worked on. Each project had a purpose
            of practicing a certain aspect of web development such as working
            with APIs and React Hooks.
          </p>
          <p>More can be found on my GitHub.</p>
        </div>
        <div className="projectList">
          {pList.map((obj) => (
            <ProjectCard
              key={obj.title}
              title={obj.title}
              image={obj.image}
              appLink={obj.appLink}
              repoLink={obj.repoLink}
            />
          ))}
        </div>
      </div>
      <div className="contactMe">
        <h1>Contact me</h1>
        <form onSubmit={handleSubmit(onMessage)}>
          <label htmlFor="emailInput">
            <input
              placeholder="Enter your email"
              {...register('email', { required: true })}
              id="emailInput"
            />
          </label>
          <label htmlFor="messageInput">
            <textarea
              placeholder="Enter your message"
              {...register('message', { required: true })}
              id="messageInput"
            />
          </label>
          <button type="submit">Send</button>
        </form>
        <div className="statusMsg">
          {statusSent ? <p>{statusSent}</p> : null}
        </div>
      </div>
      <footer>
        <strong>AlbanMarku</strong>
        <a href="https://github.com/AlbanMarku">
          <img src={logo} alt="github" />
        </a>
      </footer>
    </div>
  );
}

export default Home;
