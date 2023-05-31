import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailPage.css';
import mockItems from './mockItems';
import axios from 'axios';

interface Item {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  points: number;
  user:{
    first_name: string;
    last_name: string;
  }
}

const ItemDetailPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    const itemId = parseInt(id!);
    axios.get(`http://localhost:8080/hello/api/articles/${itemId}`).then
    (response => {
      setItem(response.data);
      console.log(response.data);
    }
    );
  }, [id]);

  if (!item) {
    return (
      <div>
        <h2>Article non trouvé</h2>
      </div>
    );
  }

  return (
    <div className="item-detail-page">
      <img className="item-detail-page__image" src={item.imageUrl} alt={item.title} />
      <div className="item-detail-page__info">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>Points requis: {item.points}</p>
        <p> Vendeur: {item.user.first_name} {item.user.last_name}</p>
        <button>Demander cet article</button>
      </div>
    </div>
  );
};

export default ItemDetailPage;

