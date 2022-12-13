import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="titleArea">
        <h1>My site</h1>
      </div>
      <div className="listArea">
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
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
