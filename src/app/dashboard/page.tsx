'use client';
import { useSession } from 'next-auth/react';
import DisplayLink from '@/components/links/DisplayLink';
import Navbar from '@/components/common/Navbar';

const page = () => {
   const { data, status, update } = useSession();
   if (status === 'loading') return null;

   return (
      <>
         <Navbar />
         <DisplayLink />
      </>
   );
};

export default page;
