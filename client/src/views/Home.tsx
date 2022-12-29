import '../styles/home.css';
import Background from '../assets/background.jpg';

function Home() {
  return (
    <div className="Home">
      <div
        className="welcomeSection"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <h1>Welcome to my page</h1>
      </div>
      <div className="aboutMe">
        <h1>this is stuff about me</h1>
      </div>
    </div>
  );
}

export default Home;
