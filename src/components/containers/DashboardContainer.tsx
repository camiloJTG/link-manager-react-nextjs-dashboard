'use client';
import { useLinkContext } from '@/contexts';
import DisplayLink from '@/components/links/DisplayLink';
import Navbar from '@/components/common/Navbar';

const DashboardContainer = () => {
   const { links } = useLinkContext();
   console.log(links);

   return (
      <>
         <Navbar />
         <div className='flex flex-wrap justify-center'>
            {links.map(({ id, title, domain, description, imageUrl }) => {
               return (
                  <DisplayLink
                     key={id}
                     title={title}
                     domain={domain}
                     description={description}
                     imageUrl={imageUrl}
                  />
               );
            })}
         </div>
      </>
   );
};

export default DashboardContainer;
