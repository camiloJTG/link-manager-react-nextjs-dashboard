import { ReactNode } from 'react';
import { ListLink } from './link';

export interface AuthContextType {
   token: string;
   userId: string;
   setToken: (token: string) => void;
   setLoggedIn: () => void;
}

export interface itemsContextType {
   items: ListLink[];
}
export interface AuthProviderProps {
   children: ReactNode;
}
