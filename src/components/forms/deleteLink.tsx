import { FormEvent, useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Styles from '@/components/forms/forms.module.css';
import { LinkModalRegisterProps } from '@/types/interfaces';

const DeleteLink = (props: LinkModalRegisterProps) => {
   const { open, onClose, title } = props;
   const [openModal, setOpenModal] = useState<boolean>(open);

   const handleCloseModal = () => setOpenModal(false);
   const handleDeleteSubmit = async (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      console.log(props.id);
   };

   useEffect(() => {
      if (!openModal) onClose(false);
   }, [openModal, onClose]);

   return (
      <div>
         <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            onClose={handleCloseModal}
            open={openModal}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{ backdrop: { timeout: 500 } }}
         >
            <Fade in={openModal}>
               <Box className={Styles.displayRegisterForm}>
                  <Typography
                     id='transition-modal-title'
                     variant='h6'
                     component='h2'
                     sx={{ textAlign: 'center' }}
                  >
                     {title}
                  </Typography>
                  <Divider />
                  <Grid id='transition-modal-description'>
                     <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3 }}
                        onClick={handleDeleteSubmit}
                     >
                        Eliminar
                     </Button>
                     <Button
                        type='button'
                        fullWidth
                        variant='contained'
                        color='secondary'
                        sx={{ mt: 1 }}
                        onClick={handleCloseModal}
                     >
                        Cancelar
                     </Button>
                  </Grid>
               </Box>
            </Fade>
         </Modal>
      </div>
   );
};

export default DeleteLink;
