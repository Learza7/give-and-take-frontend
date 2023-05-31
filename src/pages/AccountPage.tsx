import React, { useContext, useEffect, useState } from 'react';
import {AuthContext} from '../AuthContext';
import axios from 'axios';
import './AccountPage.css';

interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const AccountPage: React.FC = () => {
  const { user_id } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/hello/api/users/me`);
        setUserInfo(response.data);
        console.log(response.data)

      } catch (error) {
        console.error(error);
      }
    };
  
    if (user_id) {
      fetchUserData();
    }
  }, [user_id]);

  return (
    <div className="account-container">
      <div className="account-form">
        <h2 className="account-form__title">Votre compte</h2>
        <div className="account-info">
          <label className="account-label">
            <span>Prénom:</span> 
            <input type="text" value={userInfo?.first_name} readOnly/>
          </label>
          <label className="account-label">
            <span>Nom de famille:</span> 
            <input type="text" value={userInfo?.last_name} readOnly/>
          </label>
          <label className="account-label">
            <span>Email:</span> 
            <input type="text" value={userInfo?.email} readOnly/>
          </label>
          <label className="account-label">
            <span>Points:</span> 
            <input type="text" value={userInfo?.points} readOnly/>
          </label>
          <label className="account-label">
            <span>Nombre d'articles proposés :</span> 
            <input type="text" value={userInfo?.articles?.length} readOnly/>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
