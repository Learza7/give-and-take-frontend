import React, { useContext } from 'react';
import './PublishItemPage.css';
import { AuthContext } from '../AuthContext';

const PublishItemPage: React.FC = () => {

  const { authStatus } = useContext(AuthContext);

  if (!authStatus) {
    return (
      <div className="publish-container">
        <div className="publish-form">
          <h2 className="publish-form__title">Publier un article</h2>
          <p className="publish-form__error">Vous devez être connecté pour publier un article.</p>
        </div>
      </div>
    );
  }
  


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO : récupérer les données du formulaire
    // TODO : envoyer les données au back pour créer l'article
  };

  return (
    <div className="publish-container">
      <div className="publish-form">
        <h2 className="publish-form__title">Publier un article</h2>
        <form onSubmit={handleSubmit}>
          <label className="publish-label">
            <span>Titre:</span> 
            <input type="text" name="title" required />
          </label>

          <label className="publish-label">
            <span>Description:</span> 
            <textarea name="description" required></textarea>
          </label>

          <label className="publish-label">
            <span>URL de l'image:</span> 
            <input type="text" name="imageUrl" required />
          </label>

          <label className="publish-label">
            <span>Points:</span> 
            <input type="number" name="points" required />
          </label>

          <button type="submit" className="publish-submit">Publier</button>
        </form>
      </div>
    </div>
  );
};

export default PublishItemPage;
