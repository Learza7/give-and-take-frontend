import React from 'react';
import './HomePage.css';
const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h2 className="home-page__title">Bienvenue sur Give&Take</h2>
      <p className="home-page__description">
        Give&Take est une plateforme en ligne pour échanger des articles dont vous n'avez plus besoin avec d'autres personnes qui pourraient en avoir besoin. Créez un compte, publiez des articles et échangez-les en utilisant un système de points pour maintenir l'équilibre entre les articles donnés et récupérés.
      </p>
    </div>
  );
};

export default HomePage;
