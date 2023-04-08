import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';
import ItemDetailPage from './pages/ItemDetailPage';
import PublishItemPage from './pages/PublishItemPage';
import AccountPage from './pages/AccountPage';
import ChatPage from './pages/ChatPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/item/:id" element={<ItemDetailPage />} />
          <Route path="/publish" element={<PublishItemPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="*" element={<h1>Page non trouvée</h1>} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
