import { ReactNode } from 'react';

export interface AuthContextType {
   token: string;
   userId: string;
   setToken: (token: string) => void;
}

export interface AuthProviderProps {
   children: ReactNode;
}
