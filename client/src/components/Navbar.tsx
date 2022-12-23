import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        My Site
      </a>
      <button onClick={handleExpand} type="button" className="hamburger">
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20" rx="10" />
          <rect y="30" width="100" height="20" rx="10" />
          <rect y="60" width="100" height="20" rx="10" />
        </svg>
      </button>
      <div
        className={isExpanded ? 'navigation-menu expanded' : 'navigation-menu'}
      >
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/projects">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    // <nav>
    //   <div className="titleArea">
    //     <h1>My site</h1>
    //   </div>
    //   <div className="listArea">
    //     <ul>
    //       <li>
    //         <Link className="link" to="/">
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="link" to="/projects">
    //           Projects
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="link" to="/contact">
    //           Contact
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Navbar;
