'use client';

import { useSession } from 'next-auth/react';

const page = () => {
   const { data, status, update } = useSession();
   if (status === 'loading') return null;
   console.log(data?.user?.id);
   return <div>Dashoard page</div>;
};

export default page;
