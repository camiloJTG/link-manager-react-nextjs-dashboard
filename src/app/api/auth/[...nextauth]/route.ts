import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { decode } from 'jsonwebtoken';
import { loginUser } from '@/services';
import { TokenPayload } from '@/types/interfaces';

const handler = NextAuth({
   providers: [
      CredentialsProvider({
         name: 'credentials',
         credentials: {
            email: { label: 'email', type: 'email', placeholder: 'your-email@gmail.com' },
            password: { label: 'password', type: 'password', placeholder: '*********' }
         },
         async authorize(credentials, req) {
            const user = await loginUser({
               email: credentials?.email!,
               password: credentials?.password!
            });
            if ('token' in user) {
               const data = decode(user.token) as TokenPayload;
               data.token = user.token;
               return data;
            }
            return null;
         }
      })
   ],
   callbacks: {
      async jwt({ token, user }) {
         if (user) {
            const { email, id, username, token: accessToken } = user as TokenPayload;
            token.accessToken = accessToken;
            token.email = email;
            token.id = id;
            token.username = username;
         }
         return token;
      },
      async session({ session, token }) {
         session.user.id = token.id as string;
         session.user.email = token.email as string;
         session.user.username = token.username as string;
         session.user.token = token.token as string;
         return session;
      }
   }
});

export { handler as GET, handler as POST };
