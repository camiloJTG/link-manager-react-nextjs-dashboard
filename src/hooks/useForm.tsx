import { useRef } from 'react';
import { useFormFields, useFormTypes } from '@/types/';

export const useForm = (formType: useFormTypes) => {
   const formRef = useRef<HTMLFormElement>(null);

   const getFormValues = () => {
      const form = formRef.current;
      if (!form) return null;

      const formData = new FormData(form);
      const values: useFormFields = {};

      formData.forEach((value, key) => (values[key] = value.toString()));

      return checkReturnValues(formType, values);
   };
   return { formRef, getFormValues };
};

const checkReturnValues = (type: useFormTypes, values: useFormFields) => {
   if (type === 'loginUser') {
      return {
         email: values['email'].toString(),
         password: values['password'].toString()
      };
   }
   if (type === 'registerLink') {
      return {
         title: values['title'].toString(),
         url: values['url'].toString(),
         description: values['description'].toString()
      };
   }
   if (type === 'registerUser') {
      return {
         username: values['username'].toString(),
         password: values['password'].toString(),
         email: values['email'].toString()
      };
   }
   return null;
};
