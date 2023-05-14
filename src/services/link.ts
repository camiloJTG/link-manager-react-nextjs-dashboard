import { apiConfig } from '@/configs';
import { CommonErrorService, Link, ListLink } from '@/types';
import { createLinkSchema } from '@/types/schemas';

const { link } = apiConfig;

export const createLinkService = async (body: Link): Promise<string> => {
   try {
      const { token, ...rest } = body;
      await createLinkSchema.validate(rest, { abortEarly: true });

      const resp = await fetch(link.create, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
         },
         body: JSON.stringify(rest)
      });

      if (resp.ok) return '';
      const { statusCode, message }: CommonErrorService = await resp.json();
      if (statusCode >= 400 && statusCode < 500) return message;
      return message;
   } catch (error: any) {
      return error.message;
   }
};

export const getlinkByUser = async (
   id: string,
   token: string,
   limit: number,
   offset: number
): Promise<ListLink[]> => {
   try {
      const url =
         `${link.listLink}/${id}?` +
         new URLSearchParams({ limit: limit.toString(), offset: offset.toString() });
      const resp = await fetch(url, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
         }
      });
      const data: ListLink[] = await resp.json();
      return data;
   } catch (error: any) {
      return error;
   }
};
