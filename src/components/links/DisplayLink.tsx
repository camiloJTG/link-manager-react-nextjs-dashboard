import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import UpsertLinkForm from '../forms/UpsertLinkForm';
import { DisplayLinksProps } from '@/types/interfaces';
import { useLinkContext } from '@/contexts';

const DisplayLink = ({ description, domain, imageUrl, title, id }: DisplayLinksProps) => {
   const [openModal, setopenModal] = useState<boolean>(false);
   const { deleteLink } = useLinkContext();
   const { data } = useSession();

   const handleOpenModal = () => setopenModal(true);
   const handleCloseModal = () => setopenModal(false);
   const handleOnDeleteLink = async () => await deleteLink(id, data?.user.token!);
   const handleOpenUrl = () => console.log('Click card');

   return (
      <>
         {openModal && (
            <UpsertLinkForm onClose={handleCloseModal} openModal={openModal} title='Update link' />
         )}
         <div
            onClick={handleOpenUrl}
            className='w-full max-w-sm mx-auto bg-white rounded-3xl shadow-xl overflow-hidden transform transition-transform duration-200 hover:scale-105 px-2'
         >
            <div className='max-w-sm'>
               <div className='relative w-full h-0' style={{ paddingBottom: '70%' }}>
                  <Image src={imageUrl} alt={title} layout='fill' objectFit='cover' />
               </div>

               <div className='p-4 sm:p-4'>
                  <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{title}</p>
                  <div className='flex flex-row'>
                     <p className='text-[17px] font-bold text-[#0FB478]'>{domain}</p>
                  </div>
                  <p className='text-[#7C7C80] font-[15px] mt-6'>{description}</p>
                  <button
                     onClick={handleOpenModal}
                     className='focus:outline-none w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 mt-10 text-sm'
                  >
                     Edit
                  </button>
                  <button
                     onClick={handleOnDeleteLink}
                     className='focus:outline-none w-full focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-300 transition duration-150 text-gray-800 ease-in-out hover:border-gray-400 hover:bg-gray-400 border rounded px-8 py-2 text-sm mt-2'
                  >
                     Delete
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default DisplayLink;
