import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthProviderProps } from '@/types';

const PrivateRoute: React.FC<AuthProviderProps> = ({ children }) => {
   const router = useRouter();

   useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
         router.replace('/');
      }
   }, []);

   return <>{children}</>;
};

export default PrivateRoute;
