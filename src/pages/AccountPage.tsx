import React, { useContext, useState } from 'react';
import {AuthContext} from '../AuthContext';

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

const AccountPage: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [editing, setEditing] = useState<boolean>(false);
  const [updatedUser, setUpdatedUser] = useState<User>({ id: user?.id || 0, email: user?.email || '', firstName: user?.firstName || '', lastName: user?.lastName || '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setUpdatedUser({ id: user?.id || 0, email: user?.email || '', firstName: user?.firstName || '', lastName: user?.lastName || '' });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Envoyer les données mises à jour au backend pour mettre à jour le profil de l'utilisateur
    // Puis, mettre à jour les informations de session dans le contexte d'authentification si nécessaire
    setEditing(false);
  };
  console.log(user)

  return (
    <div className="account-page">
      <h2 className="account-page__title">Votre compte</h2>
      {editing ? (
        <form className="account-page__form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">Prénom:</label>
          <input type="text" id="firstName" name="firstName" value={updatedUser.firstName} onChange={handleInputChange} required />

          <label htmlFor="lastName">Nom de famille:</label>
          <input type="text" id="lastName" name="lastName" value={updatedUser.lastName} onChange={handleInputChange} required />

          <button type="submit">Enregistrer</button>
          <button type="button" onClick={handleCancel}>Annuler</button>
        </form>
      ) : (
        <div className="account-page__info">
          <p><strong>Prénom:</strong> {user?.firstName}</p>
          <p><strong>Nom de famille:</strong> {user?.lastName}</p>
          <button type="button" onClick={handleEdit}>Modifier</button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;