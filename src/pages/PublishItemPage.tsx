import React from 'react';
import './PublishItemPage.css';

const PublishItemPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Ajoutez le code pour envoyer les données du formulaire et créer un nouvel article
  };

  return (
    <div className="publish-item-page">
      <h2 className="publish-item-page__title">Publier un article</h2>
      <form className="publish-item-page__form" onSubmit={handleSubmit}>
        <label htmlFor="title">Titre:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" required></textarea>

        <label htmlFor="imageUrl">URL de l'image:</label>
        <input type="text" id="imageUrl" name="imageUrl" required />

        <label htmlFor="points">Points:</label>
        <input type="number" id="points" name="points" required />

        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default PublishItemPage;
