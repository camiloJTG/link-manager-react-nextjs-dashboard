import { Dispatch, SetStateAction } from 'react';

export interface LinkModalRegisterProps {
   title: string;
   open: boolean;
   onClose: Dispatch<SetStateAction<boolean>>;
   id?: string;
}

export interface Link {
   title: string;
   url: string;
   description: string;
   isFavorite: boolean;
   userId?: string;
   token?: string;
}

export interface ListLink {
   id?: string;
   name: string;
   imageUrl: string;
   url: string;
   description: string;
   domain: string;
   updatedAt?: Date;
   createdAt?: Date;
}

export interface linkListProps {
   links: ListLink[];
}
