import { CustomFormData } from './customHook';

export interface InputCredentials extends CustomFormData {
   email: string;
   password: string;
}

export interface InputRegister extends CustomFormData {
   username: string;
   email: string;
   password: string;
}
export interface TokenPayload {
   id: string;
   username: string;
   email: string;
   token: string;
   iat: number;
   exp: number;
}

export interface TokenResp {
   id: string;
   token: string;
   expired: string;
}

declare module 'next-auth' {
   interface Session {
      user: TokenPayload;
   }
}
