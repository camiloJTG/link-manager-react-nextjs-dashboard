import { CustomFormData } from '.';

export interface InputCreateLink extends CustomFormData {
   title: string;
   url: string;
   description: string;
   userId: string;
}

export interface Link {
   id: string;
   name: string;
   url: string;
   description: string;
   userId: string;
   createdAt: Date;
   updatedAt: Date;
}
