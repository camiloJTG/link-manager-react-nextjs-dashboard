type typeOption = 'success' | 'error';

export interface DisplayNotificationProps {
   title: string;
   message: string;
   type: typeOption;
   onError: () => void;
}
