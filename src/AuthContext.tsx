import React, { createContext, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextProps {
  authStatus: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (user: { email: string; password: string; firstName: string; lastName: string; }) => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authStatus, setAuthStatus] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:8080/hello/api/users/login', {
        headers: {
          'Authorization': 'Basic ' + btoa(email + ":" + password)
        },
        withCredentials: true
      });
      setUser(response.data);
      setAuthStatus(true);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:8080/hello/api/users/logout', {}, { withCredentials: true });
      setUser(null);
      setAuthStatus(false);
    } catch (error) {
      console.error(error);
    }
  };

  const signup = async (user: { email: string; password: string; firstName: string; lastName: string; }) => {
    try {
      const response = await axios.post('http://localhost:8080/hello/api/users', {
        email: user.email,
        password: user.password,
        first_name: user.firstName,
        last_name: user.lastName,
      });
      console.log(response.data);

    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ authStatus, user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
