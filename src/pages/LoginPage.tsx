import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(email, password);
        //window.location.href = '/account';
      //history.push("/account");
    } catch (error) {
      console.error(error);
      // Handle login error here
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="create-account-form__title">Se connecter</h2>
        <label className="login-label">
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <label className="login-label">
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <input className="login-submit" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
