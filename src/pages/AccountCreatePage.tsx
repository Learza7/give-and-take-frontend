import React, { useState, useContext } from 'react';
import {AuthContext} from '../AuthContext';
import './AccountCreatePage.css';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const AccountCreatePage: React.FC = () => {
  const { signup } = useContext(AuthContext);

  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
    try {
      await signup(user);
      //window.location.href = '/account';
      console.log('Account creation successful');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="create-account-container">
      <div className="create-account-form">
        <h2 className="create-account-form__title">Créer un compte</h2>
        <form onSubmit={handleSubmit}>
          <label className="create-account-label">
            <span>Prénom :</span>
            <input type="text" name="firstName" value={user.firstName} onChange={handleChange} required />
          </label>

          <label className="create-account-label">
            <span>Nom :</span>
            <input type="text" name="lastName" value={user.lastName} onChange={handleChange} required />
          </label>

          <label className="create-account-label">
            <span>Email :</span>
            <input type="email" name="email" value={user.email} onChange={handleChange} required />
          </label>

          <label className="create-account-label">
            <span>Mot de passe :</span>
            <input type="password" name="password" value={user.password} onChange={handleChange} required />
          </label>

          <button type="submit" className="create-account-submit">Créer un compte</button>
        </form>
      </div>
    </div>
  );
};

export default AccountCreatePage;
