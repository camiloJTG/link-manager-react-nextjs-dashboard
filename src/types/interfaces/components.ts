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
}

export interface DisplayLinksProps {
   id: string;
   title: string;
   domain: string;
   description: string;
   imageUrl: string;
}
