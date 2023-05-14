import * as yup from 'yup';

export const createLinkSchema = yup.object().shape({
   title: yup
      .string()
      .trim()
      .required('Debe agregar un título al enlace que desea guardar')
      .min(2, 'EL título no puede estar vacío')
      .max(50, 'EL título puede tener un largo máximo de 50 caracteres'),
   url: yup
      .string()
      .trim()
      .required('LA URL es un campo obligatorio')
      .url('URL no válida')
      .matches(/^(https?:\/\/)?([a-z0-9\-]+\.)+[a-z]{2,}(\/.*)*$/, 'URL ingresada no es válida'),
   description: yup
      .string()
      .trim()
      .required('La descripción es un campo obligatorio')
      .min(10, 'LA descripción debe tener un largo de almenos 10 caracteres')
      .max(50, 'LA descripcón solo puede tener un máximo de 50 caracteres'),
   userId: yup
      .string()
      .trim()
      .required('El user id es requerido')
      .uuid('User id no es del tipo uuid')
});
