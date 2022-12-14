import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ProjectCard from '../components/ProjectCard';
import '../styles/home.css';
import logo from '../assets/logo.png';
import expresslogo from '../assets/expressLogo.svg';
import mongologo from '../assets/mongodbLogo.svg';
import reactlogo from '../assets/reactLogo.svg';
import tslogo from '../assets/typescriptLogo.svg';
import webpacklogo from '../assets/webpackLogo.svg';
import vitestLogo from '../assets/vitestLogo.svg';
import cvDemo from '../assets/cvDemo.png';

type ProjCont = {
  title: string;
  image: string;
};

type EmailInputs = {
  email: string;
  message: string;
};

function Home() {
  const { register, handleSubmit } = useForm<EmailInputs>();
  const [statusSent, setStatusSent] = useState('');

  const pList: ProjCont[] = [
    { title: 'CV Creator', image: cvDemo },
    { title: 'Inventory App', image: cvDemo },
    { title: 'Shopping Site', image: cvDemo },
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
        <p>applied computing graduate</p>
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
        <h1>projects go here</h1>
        {pList.map((obj) => (
          <ProjectCard key={obj.title} title={obj.title} image={obj.image} />
        ))}
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
