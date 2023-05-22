import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import Styles from '@/components/forms/forms.module.css';
import NotificationModal from '@/components/common/NotificationModal';
import { Link, LinkModalRegisterProps } from '@/types/interfaces';
import { useForm } from '@/hooks';
import { createLinkService, getLink, updateLink } from '@/services';
import { AuthContext } from '@/contexts';

const RegisterLink = (props: LinkModalRegisterProps) => {
   const { open, onClose, title, id } = props;
   const { token, userId } = useContext(AuthContext);
   const { formRef, getFormValues } = useForm('registerLink');
   const [openModal, setOpenModal] = useState<boolean>(open);
   const [openMessage, setOpenMessage] = useState<boolean>(false);
   const [message, setMessage] = useState<string>('');
   const [form, setForm] = useState<Link>({ description: '', title: '', url: '', userId: '' });

   const handleCloseModal = () => setOpenModal(false);
   const handleCloseMessage = () => setOpenMessage(false);

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formValue = getFormValues();
      if (!formValue) return null;
      let result = null;
      if (id) {
         result = await updateLink(id, { token, userId, ...formValue } as Link);
      } else {
         result = await createLinkService({ token, userId, ...formValue } as Link);
      }
      if (result.length <= 0) {
         onClose(false);
      } else {
         setMessage(result);
         setOpenMessage(true);
      }
   };

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
   };

   useEffect(() => {
      const getPreviousValue = async () => {
         if (id) {
            const values = await getLink(id, token);
            setForm(values);
         }
      };
      getPreviousValue();
      if (!openModal) onClose(false);
   }, [openModal, onClose]);

   return (
      <div>
         {openMessage && (
            <NotificationModal
               message={message}
               open={openModal}
               severity='warning'
               onClose={handleCloseMessage}
            />
         )}

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
                  <Grid id='transition-modal-description'>
                     <form ref={formRef} onSubmit={handleSubmit}>
                        <TextField
                           margin='normal'
                           type='text'
                           required
                           fullWidth
                           id='title'
                           label='Título del enlace'
                           name='title'
                           autoComplete='off'
                           autoFocus
                           value={form.title}
                           onChange={handleInputChange}
                        />
                        <TextField
                           margin='normal'
                           type='url'
                           required
                           fullWidth
                           id='url'
                           label='URL dle sitio web'
                           name='url'
                           autoComplete='off'
                           value={form.url}
                           onChange={handleInputChange}
                        />
                        <TextField
                           margin='normal'
                           type='text'
                           required
                           fullWidth
                           id='description'
                           label='Descripción'
                           placeholder='max. 50 caracteres'
                           name='description'
                           autoComplete='off'
                           multiline
                           minRows={2}
                           value={form.description}
                           onChange={handleInputChange}
                        />
                        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3 }}>
                           Guardar
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
                     </form>
                  </Grid>
               </Box>
            </Fade>
         </Modal>
      </div>
   );
};

export default RegisterLink;
