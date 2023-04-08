import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Give&Take</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink exact to="/" activeClassName="header__nav-link--active" className="header__nav-link">
              Accueil
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/items" activeClassName="header__nav-link--active" className="header__nav-link">
              Articles
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/publish" activeClassName="header__nav-link--active" className="header__nav-link">
              Publier
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/account" activeClassName="header__nav-link--active" className="header__nav-link">
              Compte
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__auth">
        <button className="header__auth-btn">S'inscrire</button>
        <button className="header__auth-btn">Se connecter</button>
      </div>
    </header>
  );
};

export default Header;
