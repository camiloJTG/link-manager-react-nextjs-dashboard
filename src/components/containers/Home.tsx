import { useEffect, useState, useContext } from 'react';
import HomeLayout from '@/components/layouts/Home';
import DisplayList from '@/components/common/DisplayList';
import { ListLink } from '@/types';
import { getlinkByUser } from '@/services';
import { AuthContext } from '@/contexts';

const Home = () => {
   const [links, setLinks] = useState<ListLink[]>([]);
   const { token, userId } = useContext(AuthContext);

   useEffect(() => {
      const getLinks = async () => {
         const result = await getlinkByUser(userId, token, 30, 1);
         setLinks(result);
      };
      getLinks();
   }, [userId, token]);

   return (
      <HomeLayout>
         <DisplayList links={links} />
      </HomeLayout>
   );
};

export default Home;
