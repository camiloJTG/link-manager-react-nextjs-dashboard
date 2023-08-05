'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
   const [email, setemail] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
         await signIn('credentials', { email, password });
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className='container mx-auto'>
         <div className='flex justify-center px-6 my-12'>
            <div className='w-full xl:w-3/4 lg:w-11/12 flex'>
               <div
                  className='w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg'
                  style={{
                     backgroundImage: `url(${'https://source.unsplash.com/random'})`
                  }}
               />
               <div className='w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none'>
                  <h3 className='pt-4 text-2xl text-center'>Login</h3>

                  <form className='px-8 pt-6 pb-8 mb-4 bg-white rounded' onSubmit={handleLogin}>
                     <div className='mb-4'>
                        <label className='block mb-2 text-sm font-bold text-gray-700'>Email</label>
                        <input
                           className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-black rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                           id='email'
                           type='email'
                           placeholder='your-email@gmail.com'
                           value={email}
                           onChange={(e) => setemail(e.target.value)}
                        />
                        <label className='block mb-2 text-sm font-bold text-gray-700'>
                           Password
                        </label>
                        <input
                           className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-black rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                           id='password'
                           type='password'
                           placeholder='******************'
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                        />
                     </div>
                     <div className='mb-6 text-center'>
                        <button
                           className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                           type='submit'
                        >
                           Login
                        </button>
                     </div>
                     <hr className='mb-6 border-t' />
                     <div className='text-center'>
                        <Link
                           className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
                           href='register'
                        >
                           Don't have an account? Register at!
                        </Link>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LoginForm;
