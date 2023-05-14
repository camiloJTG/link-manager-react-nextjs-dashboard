import { useState } from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

import { ListLink } from '@/types';

const DisplayCard = ({ name, url, description, domain, imageUrl }: ListLink) => {
   const [showForm, setShowForm] = useState(false);

   const handleOpenUrl = () => window.open(url, '_blank', 'noopener noreferrer');

   return (
      <Card raised>
         <CardActionArea onClick={handleOpenUrl}>
            <CardMedia component='img' height='194' image={imageUrl} alt={name} />
            <CardContent>
               <Typography variant='h5' gutterBottom>
                  {name}
               </Typography>
               <Typography variant='body2'>{description}</Typography>
            </CardContent>
         </CardActionArea>
         <CardActions disableSpacing>
            <Grid container direction='row' justifyContent='flex-start' alignItems='center'>
               <Link
                  component='a'
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  variant='body2'
                  underline='none'
                  color='black'
               >
                  {domain}
               </Link>
            </Grid>
            <Grid container direction='row' justifyContent='flex-end' alignItems='center'>
               <IconButton aria-label='update' onClick={() => setShowForm(true)}>
                  <UpdateIcon />
               </IconButton>
               <IconButton aria-label='delete'>
                  <DeleteIcon />
               </IconButton>
            </Grid>
         </CardActions>
      </Card>
   );
};

export default DisplayCard;
