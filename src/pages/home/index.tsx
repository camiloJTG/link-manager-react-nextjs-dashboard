import HomeContainer from '@/components/containers/Home';
import PrivateRoute from '@/components/utils/CheckPrivateRoutes';

const Home = () => {
   return (
      <PrivateRoute>
         <HomeContainer />
      </PrivateRoute>
   );
};

export default Home;
