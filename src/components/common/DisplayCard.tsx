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
import DeleteLink from '../forms/deleteLink';
import UpdateLink from '../forms/registerLink';

const DisplayCard = ({ name, url, description, domain, imageUrl, id }: ListLink) => {
   const [deleteForm, setDeleteForm] = useState(false);
   const [updateForm, setUpdateForm] = useState(false);

   const handleOpenUrl = () => window.open(url, '_blank', 'noopener noreferrer');
   const handleDeleteLink = () => setDeleteForm(true);
   const handleUpdateLink = () => setUpdateForm(true);

   return (
      <>
         {deleteForm && (
            <DeleteLink
               open={deleteForm}
               onClose={setDeleteForm}
               title='¿Desea eliminar este enlace?'
               id={id}
            />
         )}
         {updateForm && (
            <UpdateLink
               open={updateForm}
               onClose={setUpdateForm}
               title='Actualizar enlace'
               id={id}
            />
         )}

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
                  <IconButton aria-label='update' onClick={handleUpdateLink}>
                     <UpdateIcon />
                  </IconButton>
                  <IconButton aria-label='delete' onClick={handleDeleteLink}>
                     <DeleteIcon />
                  </IconButton>
               </Grid>
            </CardActions>
         </Card>
      </>
   );
};
export default DisplayCard;
