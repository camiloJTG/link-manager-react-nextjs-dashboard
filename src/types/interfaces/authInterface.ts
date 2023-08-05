export interface Credentials {
   email: string;
   password: string;
}

export interface TokenResp {
   id: string;
   token: string;
   expired: string;
}

export interface TokenPayload {
   id: string;
   username: string;
   email: string;
   token: string;
   iat: number;
   exp: number;
}

export interface ErrorMessage {
   statusCode: number;
   message: string;
   error: string;
}

declare module 'next-auth' {
   interface Session {
      user: TokenPayload;
   }
}
