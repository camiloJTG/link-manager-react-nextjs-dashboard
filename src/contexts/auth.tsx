import { decode } from 'jsonwebtoken';
import { FC, createContext, useEffect, useState } from 'react';
import { AuthContextType, AuthProviderProps, TokenPayload } from '@/types';

export const AuthContext = createContext<AuthContextType>({
   token: '',
   userId: '',
   setToken: () => {},
   setLoggedIn: () => {}
});

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
   const [token, setToken] = useState<string>('');
   const [userId, setUserId] = useState<string>('');

   useEffect(() => {
      const accessToken = localStorage.getItem('token');
      if (accessToken) {
         setToken(accessToken);
      }
   }, []);

   useEffect(() => {
      if (token) {
         localStorage.setItem('token', token);
      } else {
         localStorage.removeItem('token');
      }
   }, [token]);

   useEffect(() => {
      const accessToken = localStorage.getItem('token');
      if (accessToken) {
         setToken(accessToken);
         const decodedToken = decode(token) as TokenPayload;
         if (decodedToken && typeof decodedToken === 'object') {
            setUserId(decodedToken.id);
         }
      }
   }, [token]);

   const updateToken = (newToken: string) => {
      setToken(newToken);
   };

   const logout = () => {
      setToken('');
      setUserId('');
   };

   return (
      <AuthContext.Provider
         value={{
            token,
            userId,
            setToken: updateToken,
            setLoggedIn: logout
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};
