import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Styles from './forms.module.css';
import NotificationModal from '@/components/common/NotificationModal';
import { useForm } from '@/hooks';
import { registerUserService } from '@/services';
import { User } from '@/types';

const RegisterUser = () => {
   const { formRef, getFormValues } = useForm('registerUser');
   const [error, setError] = useState('');
   const [open, setOpen] = useState(false);
   const router = useRouter();

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formValue = getFormValues();
      if (!formValue) return null;
      const result = await registerUserService(formValue as User);
      if (result.length <= 0) {
         setError('');
         router.replace('home');
      }
      setError(result);
   };

   const handleCloseModal = () => {
      setOpen(false);
      setError('');
   };

   useEffect(() => {
      if (error.length > 0 && !open) setOpen(true);
   }, [error, open]);

   return (
      <Box className={Styles.layout}>
         <Paper className={Styles.displayPaper} elevation={24}>
            {error && (
               <NotificationModal
                  message={error}
                  open={open}
                  onClose={handleCloseModal}
                  severity='warning'
               />
            )}
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
               Registrarse
            </Typography>

            <form ref={formRef} onSubmit={handleSubmit}>
               <TextField
                  margin='normal'
                  required
                  fullWidth
                  label='username'
                  id='username'
                  name='username'
                  autoComplete='off'
                  autoFocus
               />
               <TextField
                  margin='normal'
                  type='email'
                  required
                  fullWidth
                  id='email'
                  label='email'
                  name='email'
                  autoComplete='off'
               />
               <TextField
                  margin='normal'
                  type='password'
                  required
                  fullWidth
                  id='password'
                  label='password'
                  name='password'
                  autoComplete='off'
               />
               <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                  Registrarse
               </Button>
               <Grid item sx={{ textAlign: 'center' }}>
                  <Link href='/' className={Styles.redirect}>
                     {'Iniciar sesión'}
                  </Link>
               </Grid>
            </form>
         </Paper>
      </Box>
   );
};

export default RegisterUser;
