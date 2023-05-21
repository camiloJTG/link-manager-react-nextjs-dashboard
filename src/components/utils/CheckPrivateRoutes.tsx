import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';

interface PrivateRouteProps {
   children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
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
