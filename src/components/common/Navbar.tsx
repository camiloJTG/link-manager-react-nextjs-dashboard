import { useState } from 'react';
import UpsertLinkForm from '../forms/UpsertLinkForm';
import { signOut } from 'next-auth/react';

const Navbar = () => {
   const [openModal, setOpenModal] = useState<boolean>(false);

   const handleCloseModal = () => setOpenModal(false);
   const handleOpenModal = () => setOpenModal(true);
   const handleOnCloseSession = async () => await signOut({ callbackUrl: '/' });

   return (
      <nav className='w-full z-30 top-10 bg-white shadow-lg border-b border-blue-400 mt-5'>
         <div className='w-full flex sm:flex-col sm:items-center md:items-end md:justify-between px-6 mb-5'>
            <div className='order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4'>
               <div className='auth flex items-center w-full md:w-full'>
                  <button
                     onClick={handleOpenModal}
                     className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm'
                  >
                     New Link
                  </button>
                  {openModal && (
                     <UpsertLinkForm
                        title={'Create link'}
                        openModal={openModal}
                        onClose={handleCloseModal}
                     />
                  )}
                  <button
                     onClick={handleOnCloseSession}
                     className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ml-3 bg-gray-300 transition duration-150 text-gray-800 ease-in-out hover:border-gray-400 hover:bg-gray-400 border rounded px-8 py-2 text-sm'
                  >
                     Log out
                  </button>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
