import { useEffect, useState, useContext } from 'react';

import Container from '@mui/material/Container';
import Header from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import DisplayCard from '@/components/common/DisplayCard';
import { ListLink } from '@/types';
import { getlinkByUser } from '@/services';
import { AuthContext } from '@/contexts';

const Home = () => {
   const [links, setLinks] = useState<ListLink[]>([]);
   const { token, userId } = useContext(AuthContext);

   useEffect(() => {
      const getLinks = async () => {
         if (userId) {
            const result = await getlinkByUser(userId, token, 30, 1);
            setLinks(result);
         }
      };
      getLinks();
   }, [token, userId]);

   return (
      <>
         <Header />

         <Container maxWidth='lg'>
            <div
               style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  marginTop: 40
               }}
            >
               {links.length > 0 ? (
                  links.map(({ description, domain, name, url, id, imageUrl }) => (
                     <div key={id} style={{ width: '350px', height: '350px' }}>
                        <DisplayCard
                           description={description}
                           domain={domain}
                           name={name}
                           url={url}
                           key={id}
                           imageUrl={imageUrl}
                           id={id}
                        />
                     </div>
                  ))
               ) : (
                  <h1> No tienes enlaces creados ... </h1>
               )}
            </div>
         </Container>

         <Footer />
      </>
   );
};

export default Home;
