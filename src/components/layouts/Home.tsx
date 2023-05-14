import Header from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { AuthProviderProps } from '@/types/interfaces';

const Home = ({ children }: AuthProviderProps) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
};

export default Home;
