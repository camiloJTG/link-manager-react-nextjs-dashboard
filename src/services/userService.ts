import { InputCredentials, ErrorMessage, TokenResp } from '@/types/interfaces';

const BASE_URL = process.env.NEXT_PUBLIC_LINK_MANAGER_API_BASE_URL;

export const loginUser = async (credentials: InputCredentials) => {
   try {
      const resp = await fetch(`${BASE_URL}/auth/login`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(credentials)
      });

      const data = await resp.json();

      if (resp.ok && data) {
         return data as TokenResp;
      }
      return data as ErrorMessage;
   } catch (error: any) {
      throw error;
   }
};
