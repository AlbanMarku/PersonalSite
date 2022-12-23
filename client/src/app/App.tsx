import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Projects from '../views/Projects';
import Home from '../views/Home';
import Contact from '../views/Contact';
import '../styles/app.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
