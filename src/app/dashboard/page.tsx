import DashboardContainer from '@/components/containers/DashboardContainer';
import { LinkProvider } from '@/contexts';

const page = () => {
   return (
      <LinkProvider>
         <DashboardContainer />
      </LinkProvider>
   );
};

export default page;
