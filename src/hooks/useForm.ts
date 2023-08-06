import { useRef } from 'react';
import { CustomFormData } from '@/types/interfaces';

export const useForm = <T extends CustomFormData>() => {
   const formRef = useRef<HTMLFormElement>(null);

   const getFormData = (): T | null => {
      const formElement = formRef.current;
      if (!formElement) return null;

      const formData: CustomFormData = {};

      const elements = formElement.elements;
      for (let i = 0; i < elements.length; i++) {
         const element = elements[i] as HTMLInputElement | HTMLTextAreaElement;
         if (element.name) {
            formData[element.name] = element.value;
         }
      }
      return formData as T;
   };

   return { formRef, getFormData };
};
