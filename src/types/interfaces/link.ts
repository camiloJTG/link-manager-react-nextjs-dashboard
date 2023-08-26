import { CustomFormData } from '.';

export interface InputCreateLink extends CustomFormData {
   title: string;
   url: string;
   description: string;
   userId: string;
   token: string;
}

export interface Link {
   id: string;
   title: string;
   url: string;
   domain: string;
   imageUrl: string;
   description: string;
   userId: string;
   createdAt: Date;
   updatedAt: Date;
}
