import * as yup from 'yup';

export const createLinkValidation = yup.object().shape({
   title: yup
      .string()
      .required('Title is required')
      .min(1, 'Title cannot is empty')
      .max(100, 'Title cannot exceed one fyfty characters')
      .trim(),
   url: yup.string().required('Url is required').trim().url(),
   description: yup
      .string()
      .required('Description is required')
      .min(10, 'Description cannot is empty')
      .max(50, 'Description cannot exceed fyfty characters')
      .trim()
});
