import React, { useState } from 'react';
import './AccountPage.css';

interface Account {
  name: string;
  email: string;
  points: number;
}

// TODO remplacer par les données du compte de l'utilisateur venant du back
const mockAccount: Account = {
  name: 'James Bond',
  email: 'james.bond@gmail.com',
  points: 150
};

const AccountPage: React.FC = () => {
  const [account, setAccount] = useState<Account>(mockAccount);
  const [editing, setEditing] = useState<boolean>(false);
  const [updatedAccount, setUpdatedAccount] = useState<Account>(account);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdatedAccount({ ...updatedAccount, [name]: value });
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setUpdatedAccount(account);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setAccount(updatedAccount);
    setEditing(false);
    // TODO envoyer les données du formulaire au back pour mettre à jour le compte
  };

  return (
    <div className="account-page">
      <h2 className="account-page__title">Votre compte</h2>
      {editing ? (
        <form className="account-page__form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nom:</label>
          <input type="text" id="name" name="name" value={updatedAccount.name} onChange={handleInputChange} required />

          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" value={updatedAccount.email} onChange={handleInputChange} required />

          <div>
            <button type="submit">Enregistrer</button>
            <button type="button" onClick={handleCancel}>Annuler</button>
          </div>
        </form>
      ) : (
        <div className="account-page__info">
          <p><strong>Nom:</strong> {account.name}</p>
          <p><strong>E-mail:</strong> {account.email}</p>
          <p><strong>Points:</strong> {account.points}</p>
          <button onClick={handleEdit}>Modifier</button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;

