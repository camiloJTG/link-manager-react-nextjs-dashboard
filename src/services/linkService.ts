import { InputCreateLink, ErrorMessage, Link } from '@/types/interfaces';
import { SERVICE_COMMON_ERROR } from '@/types/constants';

const BASE_URL = process.env.NEXT_PUBLIC_LINK_MANAGER_API_BASE_URL;

export const getLinks = async (token: string, userId: string) => {
   try {
      const resp = await fetch(`${BASE_URL}/link/user/${userId}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
         }
      });
      const data = await resp.json();
      if (resp.ok && data) {
         return data as Link[];
      }
      return [];
   } catch (error: any) {
      console.error(error.message);
      return SERVICE_COMMON_ERROR;
   }
};

export const createLink = async (link: InputCreateLink) => {
   try {
      const { token, ...linkDetail } = link;
      const resp = await fetch(`${BASE_URL}/link`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
         body: JSON.stringify(linkDetail)
      });

      const data = await resp.json();
      if (resp.ok && data) {
         return data as Link;
      }
      const { message }: ErrorMessage = data;
      return message;
   } catch (error: any) {
      console.error(error.message);
      return SERVICE_COMMON_ERROR;
   }
};

export const removeLink = async (id: string, token: string) => {
   try {
      const resp = await fetch(`${BASE_URL}/link/${id}`, {
         method: 'DELETE',
         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      });

      const data = await resp.json();
      if (resp.ok && data) {
         return data;
      }
      const { message }: ErrorMessage = data;
      return message;
   } catch (error: any) {
      console.error(error.message);
      return SERVICE_COMMON_ERROR;
   }
};
