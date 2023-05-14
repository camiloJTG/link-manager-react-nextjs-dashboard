export interface TokenResponse {
   token: string;
   expired: string;
}
export interface TokenPayload {
   id: string;
   username: string;
   email: string;
   iat: number;
   exp: number;
}

export interface CommonErrorService {
   statusCode: number;
   message: string;
   error: string;
}
