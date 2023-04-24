import { FC } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { NotificationModal } from '@/types/interfaces';

const NotificationModal: FC<NotificationModal> = ({ message, onClose, open, severity }) => {
   return (
      <Snackbar
         open={open}
         autoHideDuration={3000}
         anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
         onClose={onClose}
      >
         <Alert severity={severity} variant='standard' elevation={6}>
            {message}
         </Alert>
      </Snackbar>
   );
};

export default NotificationModal;
