'use client';

import { FC, createContext, useState } from 'react';
import { decode } from 'jsonwebtoken';
import { AuthContextType, AuthProviderProps, TokenPayload } from '@/types';

const getLocalStorageValues = (): string => {
   if (typeof window === 'undefined') return '';
   const accessToken = sessionStorage.getItem('token');
   return accessToken ? accessToken : '';
};

const getUserId = (token: string) => {
   const tokenDecoded = decode(token) as TokenPayload;
   return !tokenDecoded ? '' : tokenDecoded.id;
};

export const AuthContext = createContext<AuthContextType>({
   token: '',
   setToken: () => {},
   userId: ''
});

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
   const [token, setToken] = useState<string>(getLocalStorageValues());
   const [userId, setUserId] = useState<string>(getUserId(token));

   const updateToken = (token: string) => {
      if (token.length === 0) return;
      localStorage.setItem('token', token);
      setToken(token);
      setUserId(getUserId(token));
   };

   return (
      <AuthContext.Provider value={{ token, setToken: updateToken, userId }}>
         {children}
      </AuthContext.Provider>
   );
};
