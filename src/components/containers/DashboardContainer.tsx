'use client';
import { useLinkContext } from '@/contexts';
import DisplayLink from '@/components/links/DisplayLink';
import Navbar from '@/components/common/Navbar';

const DashboardContainer = () => {
   const { links } = useLinkContext();

   return (
      <>
         <Navbar />
         <div className='container mx-auto px-4 py-8 md:py-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7'>
               {links.map(({ id, title, domain, description, imageUrl }) => {
                  return (
                     <DisplayLink
                        id={id}
                        title={title}
                        domain={domain}
                        description={description}
                        imageUrl={imageUrl}
                        key={id}
                     />
                  );
               })}
            </div>
         </div>
      </>
   );
};

export default DashboardContainer;
