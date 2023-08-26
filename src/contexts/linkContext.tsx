'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Link, LinkContextValue } from '@/types/interfaces';
import { getLinks } from '@/services';

const LinkContext = createContext<LinkContextValue | undefined>(undefined);

export const LinkProvider = ({ children }: { children: ReactNode }) => {
   const [links, setLinks] = useState<Link[]>([]);
   const { data, status } = useSession();

   useEffect(() => {
      const obtainLinks = async () => {
         if (status === 'authenticated') {
            const result = await getLinks(data?.user.token!, data?.user.id!);
            if (typeof result !== 'string') setLinks(result);
         }
      };

      obtainLinks();
   }, [data, , status]);

   const createLink = () => {};

   const linkContextValue: LinkContextValue = {
      links
   };

   return <LinkContext.Provider value={linkContextValue}> {children} </LinkContext.Provider>;
};

export const useLinkContext = (): LinkContextValue => {
   const context = useContext(LinkContext);
   if (!context) {
      throw new Error('useDataContext must be used within a DataProvider');
   }
   return context;
};
