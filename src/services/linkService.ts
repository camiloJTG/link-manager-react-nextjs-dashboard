import { InputCreateLink, ErrorMessage, Link } from '@/types/interfaces';

const BASE_URL = process.env.NEXT_PUBLIC_LINK_MANAGER_API_BASE_URL;

export const createLink = async (link: InputCreateLink) => {
   try {
      const resp = await fetch(`${BASE_URL}/link`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(link)
      });

      const data = await resp.json();
      if (resp.ok && data) {
         return data as Link;
      }
      return data as ErrorMessage;
   } catch (error: any) {
      console.error(error.message);
      return 'App error. Please, try again later';
   }
};
