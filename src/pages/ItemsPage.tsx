import React from 'react';
import { useState } from 'react';
import './ItemsPage.css';
import ItemCard from '../components/ItemCard';
import { Link } from 'react-router-dom';
import mockItems from './mockItems';
import { useEffect } from 'react';
import axios from 'axios';

interface Article {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    points: number;
    region: string;
}

const ItemsPage: React.FC = () => {
    //TODO : récupérer les items depuis l'API
    
    const [data, SetData] = useState<Article[] | null>(null);
    const [filteredItemsUsers, SetFilteredItemsUsers] = useState<Article[] | null>(null); 
    

    const [searchValue, setSearchValue] = useState('');

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };


    useEffect(() => {
        const fetchData = async () => {
          try {
            
            const response = await axios.get('http://localhost:8080/hello/api/articles', {
              // Request payload
            });

            SetData(response.data);          
            console.log(response.data);
            console.log("ok");

            response.data.forEach((article: Article) => {
                console.log(article.id, article.title, article.description);
            });


          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData(); 
      }, []);

    const filteredItems = mockItems.filter(item =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (data !== null) {
        SetFilteredItemsUsers(data.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.description.toLowerCase().includes(searchValue.toLowerCase())
        ));
    }
   

    

    return (
        <div className="items-page">
            <h2 className="items-page__title">Articles disponibles</h2>

            <input
                className="items-page__search"
                type="text"
                placeholder="Recherche"
                value={searchValue}
                onChange={handleSearchInputChange}
            />

            <div className="items-page__grid">
                {filteredItems.map(item => (
                    <Link key={item.id} to={`/item/${item.id}`}>
                        <ItemCard item={item} />
                    </Link>
                ))}
                {filteredItemsUsers && filteredItemsUsers.map(item => (
                    <Link key={item.id} to={`/item/${item.id}`}>
                        <ItemCard item={item} />
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default ItemsPage;
