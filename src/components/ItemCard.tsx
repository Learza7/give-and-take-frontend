import React from 'react';
import './ItemCard.css';

interface Item {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  points: number;
}

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.imageUrl} alt={item.title} className="item-card__image" />
      <div className="item-card__content">
        <h3 className="item-card__title">{item.title}</h3>
        <p className="item-card__description">{item.description}</p>
        <p className="item-card__points">Points : {item.points}</p>
      </div>
    </div>
  );
};

export default ItemCard;
