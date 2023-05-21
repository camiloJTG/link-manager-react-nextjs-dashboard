import { decode } from 'jsonwebtoken';
import { FC, createContext, useEffect, useState } from 'react';
import { AuthContextType, AuthProviderProps, TokenPayload } from '@/types';

export const AuthContext = createContext<AuthContextType>({
   token: '',
   userId: '',
   setToken: () => {}
});

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
   const [token, setToken] = useState<string>('');
   const [userId, setUserId] = useState<string>('');

   useEffect(() => {
      const accessToken = sessionStorage.getItem('token');
      if (accessToken) {
         setToken(accessToken);
         const decodedToken = decode(token) as TokenPayload;
         if (decodedToken && typeof decodedToken === 'object') {
            setUserId(decodedToken.id);
         }
      }
   }, []);

   useEffect(() => {
      if (token) {
         sessionStorage.setItem('token', token);
      } else {
         sessionStorage.removeItem('token');
      }
   }, [token]);

   const updateToken = (newToken: string) => {
      setToken(newToken);
      const decodedToken = decode(newToken) as TokenPayload;
      if (decodedToken && typeof decodedToken === 'object') {
         setUserId(decodedToken.id);
      }
   };

   return (
      <AuthContext.Provider value={{ token, userId, setToken: updateToken }}>
         {children}
      </AuthContext.Provider>
   );
};
