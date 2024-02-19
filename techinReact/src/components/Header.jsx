import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src="../public/logo.png" alt="Company logo" className="logo-img" />
      </Link>

      <nav>
        <ul className="nav-links-ul">
          <li>
            <Link to="/">Pagrindnis</Link>
          </li>
          <li>
            <Link to="/registration">Registracija</Link>
          </li>
          <li>
            <Link to="/review">Atsiliepimas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
