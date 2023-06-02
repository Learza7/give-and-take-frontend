import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../AuthContext';

const Header: React.FC = () => {

  const { authStatus, logout } = useContext(AuthContext);
  const location = useLocation();

  return (
    <header className="header">
      <h1 className="header__logo rainbow_text_animated">Give&Take</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className={`header__nav-item ${location.pathname === "/" ? "active" : ""}`}>
            <Link to="/" className="header__nav-link">
              Accueil
            </Link>
          </li>
          <li className={`header__nav-item ${location.pathname.startsWith("/items") ? "active" : ""}`}>
            <Link to="/items" className="header__nav-link">
              Articles
            </Link>
          </li>
          <li className={`header__nav-item ${location.pathname.startsWith("/publish") ? "active" : ""}`}>
            <Link to="/publish" className="header__nav-link">
              Publier
            </Link>
          </li>
          {authStatus && (
          <li className={`header__nav-item ${location.pathname.startsWith("/account") ? "active" : ""}`}>
            <Link to="/account" className="header__nav-link">
              Compte
            </Link>
          </li>)}
        </ul>
      </nav>
      <div className="header__auth">
        {authStatus ? (
          <button className="header__auth-btn" onClick={logout}> 
            Se déconnecter
          </button>
        ) : (
          <><button className="header__auth-btn">
          <Link to="/account/create" className="header__nav-link">
            S'inscrire
          </Link></button>
          <button className="header__auth-btn">
          <Link to="/login" className="header__nav-link">
            Se connecter
          </Link>
          </button></>
        )}
      </div>
    </header>
  );
};

export default Header;
