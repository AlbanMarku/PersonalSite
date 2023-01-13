/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef, useState } from 'react';
import '../styles/navbar.css';

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const myRef = useRef<HTMLInputElement | null>(null);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleScroll = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Alban Marku&apos;s Portfolio
      </a>
      {/* <button onClick={handleExpand} type="button" className="hamburger">
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
          <li onClick={() => {}}>About me</li>
          <li>Projects</li>
        </ul>
      </div> */}
    </nav>
  );
}

export default Navbar;
