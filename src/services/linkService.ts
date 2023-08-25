import { InputCreateLink, ErrorMessage } from '@/types/interfaces';
import { SERVICE_COMMON_ERROR, SERVICE_CREATED_LINK } from '@/types/constants';

const BASE_URL = process.env.NEXT_PUBLIC_LINK_MANAGER_API_BASE_URL;

export const listLink = async (token: string) => {
   try {
      const resp = await fetch(`${BASE_URL}/link`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      });
      const data = await resp.json();
      if (resp.ok && data) {
      }
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
         return SERVICE_CREATED_LINK;
      }
      const { message }: ErrorMessage = data;
      return message;
   } catch (error: any) {
      console.error(error.message);
      return SERVICE_COMMON_ERROR;
   }
};
