import '../styles/navbar.css';
import pdf from '../assets/cv.pdf';

function Navbar() {
  const handleClick = () => {
    window.open(pdf, '_blank');
  };

  return (
    <nav className="navigation">
      <h1 className="brand-name">Alban Marku&apos;s Portfolio</h1>
      <button onClick={handleClick} type="button">
        View CV
      </button>
    </nav>
  );
}

export default Navbar;
