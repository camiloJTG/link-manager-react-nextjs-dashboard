import Image from 'next/image';
import UpsertLink from '../forms/UpsertLink';

const DisplayLink = () => {
   const handleOpenUrl = () => console.log('Click card');

   return (
      <div
         onClick={handleOpenUrl}
         className='w-full max-w-sm mx-auto bg-white rounded-3xl shadow-xl overflow-hidden transform transition-transform duration-200 hover:scale-105'
      >
         <div className='max-w-sm mx-auto'>
            <div className='h-236px'>
               <Image
                  src={
                     'https://images.unsplash.com/photo-1688988816492-f71727a11149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjQ1NDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTE4ODkwOTR8&ixlib=rb-4.0.3&q=80&w=1080'
                  }
                  alt='img'
                  width={400}
                  height={400}
               />
            </div>
            <div className='p-4 sm:p-4'>
               <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>LINK MANE</p>
               <div className='flex flex-row'>
                  <p className='text-[17px] font-bold text-[#0FB478]'>DOMAIN</p>
               </div>
               <p className='text-[#7C7C80] font-[15px] mt-6'>Short description</p>

               <a
                  target='_blank'
                  href='foodiesapp://food/1001'
                  className='block mt-5 w-full px-3 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'
               >
                  Edit
               </a>
               <a
                  target='_blank'
                  href='https://apps.apple.com/us/app/id1493631471'
                  className='block mt-1.5 w-full px-3 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'
               >
                  Delete
               </a>
            </div>
            DU
         </div>
      </div>
   );
};

export default DisplayLink;
