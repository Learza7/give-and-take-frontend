import React, { useState, useContext } from 'react';
import {AuthContext} from '../AuthContext';
import { redirect } from 'react-router-dom';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const AccountCreatePage: React.FC = () => {
  const { signup } = useContext(AuthContext);
  const { login } = useContext(AuthContext);
  

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
      // Handle successful signup, e.g. by navigating to a different page, showing a success message, etc.
      console.log('login successful');
      setTimeout(() => {
        
        //window.location.href = '/account';
        }, 1000);
      //console.log(user2)
      //window.location.href = '/account';
    } catch (error) {
      console.error(error);
      // Handle unsuccessful signup, e.g. by showing an error message
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default AccountCreatePage;
