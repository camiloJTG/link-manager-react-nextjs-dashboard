'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { InputCreateLink, Link, LinkContextValue } from '@/types/interfaces';
import { createLink, getLinks, removeLink } from '@/services';
import { createLinkValidation } from '@/types/schemas';
import { SERVICE_CREATED_LINK } from '@/types/constants';

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
   }, [status]);

   const addLink = async (newLink: InputCreateLink) => {
      await createLinkValidation.validate(newLink);
      const result = await createLink(newLink);
      if (typeof result !== 'string') {
         setLinks([...links, result]);
         return SERVICE_CREATED_LINK;
      }
      return result;
   };

   const deleteLink = async (id: string, token: string) => {
      await removeLink(id, token);
      setLinks((prev) => prev.filter((link) => link.id !== id));
   };

   const linkContextValue: LinkContextValue = {
      links,
      addLink,
      deleteLink
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
