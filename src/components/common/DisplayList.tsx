import Container from '@mui/material/Container';
import DisplayCard from '@/components/common/DisplayCard';
import { linkListProps } from '@/types';

const DisplayList = ({ links }: linkListProps) => {
   return (
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
                     />
                  </div>
               ))
            ) : (
               <h1> Cargando ... </h1>
            )}
         </div>
      </Container>
   );
};

export default DisplayList;
