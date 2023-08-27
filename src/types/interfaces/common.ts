import { InputCreateLink, Link } from '.';

export interface CustomFormData {
   [key: string]: string;
}

export interface LinkContextValue {
   links: Link[];
   addLink: (newLink: InputCreateLink) => Promise<string>;
   deleteLink: (id: string, token: string) => Promise<void>;
}
