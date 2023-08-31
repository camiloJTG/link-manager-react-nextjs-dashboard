import { FormEvent, useState } from 'react';
import { useSession } from 'next-auth/react';
import { InputCreateLink, UpsertLinkProps } from '@/types/interfaces';
import { useForm } from '@/hooks';
import { useLinkContext } from '@/contexts';

const UpsertLink = ({ onClose, openModal, title, link }: UpsertLinkProps) => {
   const { formRef, getFormData } = useForm<InputCreateLink>();
   const { data, status } = useSession();
   const { addLink } = useLinkContext();
   const [message, setMessage] = useState<string>('');

   if (status === 'loading') return null;

   const handleOnCreateLink = async (e: FormEvent<HTMLFormElement>) => {
      try {
         e.preventDefault();
         const currentForm = getFormData();
         if (!currentForm) return null;

         const result = await addLink({
            ...currentForm,
            userId: data?.user.id!,
            token: data?.user.token!
         });
         setMessage(result);
         if (result.length > 0) onClose();
      } catch (error: any) {
         setMessage(error.message);
      }
   };

   return (
      <div
         className={`modal ${
            openModal ? 'block' : 'hidden'
         } fixed inset-0 z-10 flex items-center justify-center`}
      >
         <div
            className='modal-overlay absolute inset-0 bg-gray-500 opacity-75'
            onClick={onClose}
         ></div>
         <div className='modal-container bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto max-h-screen'>
            <div id='modalLayout' className='modal-content py-4 text-left px-6 shadow-2xl relative'>
               <button className='absolute top-2 right-2 cursor-pointer'>
                  <span className='text-2xl' onClick={onClose}>
                     ×
                  </span>
               </button>

               <div className='flex justify-center items-center py-4'>
                  <p className='text-base font-bold text-center'>{title}</p>
               </div>

               <div className='overflow-x-auto'>
                  <form ref={formRef} onSubmit={handleOnCreateLink}>
                     <label className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
                        Title
                     </label>
                     <input
                        id='title'
                        name='title'
                        className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
                        type='text'
                        required
                        maxLength={50}
                        minLength={1}
                        defaultValue={link?.title || ''}
                     />
                     <label className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
                        Url
                     </label>
                     <input
                        id='url'
                        name='url'
                        className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
                        type='url'
                        required
                        defaultValue={link?.url || ''}
                     />

                     <label className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
                        Description
                     </label>
                     <textarea
                        id='description'
                        name='description'
                        className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
                        required
                        maxLength={50}
                        minLength={10}
                        style={{ height: '80px' }}
                        defaultValue={link?.description || ''}
                     />
                     <div className='flex items-center justify-end w-full mt-6 flex-col sm:flex-row'>
                        <button
                           type='submit'
                           className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm'
                        >
                           Save
                        </button>
                        <button
                           onClick={onClose}
                           className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm'
                        >
                           Cancel
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UpsertLink;
