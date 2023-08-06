import { useEffect, useState } from 'react';
import { DisplayNotificationProps } from '@/types/interfaces';

const NotificationPopUp = ({ message, title, type, onError }: DisplayNotificationProps) => {
   const [visible, setVisible] = useState<boolean>(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setVisible(false);
         onError();
      }, 5000);

      return () => clearTimeout(timer);
   }, []);

   return visible ? (
      <div
         className={`bg-${type === 'success' ? 'green' : 'red'}-100 border-t border-b border-${
            type === 'success' ? 'green' : 'red'
         }-500 text-${type === 'success' ? 'green' : 'red'}-70 px-4 py-3`}
         role='alert'
      >
         <p className='font-bold'>{title}</p>
         <p className='text-sm'>{message}</p>
      </div>
   ) : null;
};

export default NotificationPopUp;
