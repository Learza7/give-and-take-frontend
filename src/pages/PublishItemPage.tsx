import React, { useContext, useState } from 'react';
import './PublishItemPage.css';
import { AuthContext } from '../AuthContext';
import axios from 'axios';



interface Article {
  title : string;
  description : string;
  region : string;
  imageUrl : string;
  points : number;
}

const PublishItemPage: React.FC = () => {

  const { authStatus, user_id } = useContext(AuthContext);


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

  const [article, setArticle] = useState<Article>({
    title: '',
    description: '',
    region: '',
    imageUrl: '',
    points: 0,
  });
  

  const publish = async (article: { title: string; description: string; region: string; imageUrl: string; points: number; }) => {
    try {
      console.log(article);
      const response = await axios.post('http://localhost:8080/hello/api/articles', {
        title: article.title,
        description: article.description,

        imageUrl: article.imageUrl,
        points: article.points,
        
      });
      console.log(response.data);

    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO : récupérer les données du formulaire
    // TODO : envoyer les données au back pour créer l'article
    try {
      await publish(article);
      //window.location.href = '/account';
      console.log('Article publication successful');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
  };

  return (
    <div className="publish-container">
      <div className="publish-form">
        <h2 className="publish-form__title">Publier un article</h2>
        <form onSubmit={handleSubmit}>
          <label className="publish-label">
            <span>Titre:</span> 
            <input type="text" name="title" value={article.title} onChange={handleChange} required />
          </label>

          <label className="publish-label">
            <span>Description:</span> 
            <textarea name="description" value={article.description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setArticle((prevValues) => ({ ...prevValues, description: e.target.value }))} required></textarea>
          </label>

          <label className="publish-label">
            <span>URL de l'image:</span> 
            <input type="text" name="imageUrl" value={article.imageUrl} onChange={handleChange} required />
          </label>

          <label className="publish-label">
            <span>Points:</span> 
            <input type="number" name="points" value={article.points} onChange={handleChange} required />
          </label>

          <button type="submit" className="publish-submit">Publier</button>
        </form>
      </div>
    </div>
  );
};

export default PublishItemPage;
