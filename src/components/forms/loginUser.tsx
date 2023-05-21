import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
import { loginUser } from '@/services';
import { Login } from '@/types';

const LoginForm = () => {
   const { formRef, getFormValues } = useForm('loginUser');
   const [error, setError] = useState('');
   const [open, setOpen] = useState(false);
   const router = useRouter();

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formValue = getFormValues();
      if (!formValue) return null;
      const result = await loginUser(formValue as Login);
      if (result.length <= 0) {
         setError('');
         router.push('home');
      }
      setError(result);
   };

   useEffect(() => {
      if (error.length > 0 && !open) setOpen(true);
   }, [error, open]);

   const handleCloseModal = () => {
      setOpen(false);
      setError('');
   };

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
               Iniciar sesión
            </Typography>
            <form ref={formRef} onSubmit={handleSubmit}>
               <TextField
                  margin='normal'
                  type='email'
                  required
                  fullWidth
                  id='email'
                  label='Correo electrónico'
                  name='email'
                  autoComplete='off'
                  autoFocus
               />
               <TextField
                  margin='normal'
                  type='password'
                  required
                  fullWidth
                  name='password'
                  label='Contraseña'
                  id='password'
                  autoComplete='off'
               />
               <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                  Inciar sesión
               </Button>
               <Grid item sx={{ textAlign: 'center' }}>
                  <Link href='register' className={Styles.redirect}>
                     {'¿No tienes cuenta? Registrate.'}
                  </Link>
               </Grid>
            </form>
         </Paper>
      </Box>
   );
};

export default LoginForm;
