import { SyntheticEvent } from 'react';
import { AlertColor, SnackbarCloseReason } from '@mui/material';

export interface NotificationModal {
   open: boolean;
   onClose: (e: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void;
   message: string;
   severity: AlertColor;
}
