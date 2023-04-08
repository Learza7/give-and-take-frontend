import React from 'react';
import { useState } from 'react';
import './ItemsPage.css';
import ItemCard from '../components/ItemCard';
import { Link } from 'react-router-dom';
import mockItems from './mockItems';

const ItemsPage: React.FC = () => {
    // Remplacez ceci par une requête API pour récupérer les articles réels



    const [searchValue, setSearchValue] = useState('');

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const filteredItems = mockItems.filter(item =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description.toLowerCase().includes(searchValue.toLowerCase())
    );

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
            </div>

        </div>
    );
};

export default ItemsPage;
