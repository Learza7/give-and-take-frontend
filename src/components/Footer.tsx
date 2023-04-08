import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© {new Date().getFullYear()} Give&Take. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
