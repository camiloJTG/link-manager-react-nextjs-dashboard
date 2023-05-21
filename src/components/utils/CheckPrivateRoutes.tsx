import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthProviderProps } from '@/types';

const PrivateRoute: React.FC<AuthProviderProps> = ({ children }) => {
   const router = useRouter();

   useEffect(() => {
      const token = sessionStorage.getItem('token');
      if (!token) {
         router.push('/');
      }
   }, []);

   return <>{children}</>;
};

export default PrivateRoute;
