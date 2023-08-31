import { Link } from '.';

type typeOption = 'success' | 'error';

export interface DisplayNotificationProps {
   title: string;
   message: string;
   type: typeOption;
   onError: () => void;
}

export interface UpsertLinkProps {
   openModal: boolean;
   onClose: () => void;
   title: string;
   link?: Link;
}

export interface DisplayLinksProps {
   id: string;
   title: string;
   domain: string;
   description: string;
   url: string;
   imageUrl: string;
}
