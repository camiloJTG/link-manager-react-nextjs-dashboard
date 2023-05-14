import * as yup from 'yup';

export const registerUserSchema = yup.object().shape({
   username: yup
      .string()
      .trim()
      .required('El nombre de usuario es un campo requerido')
      .min(1, 'Nombre de usuario es un campo obligatorio')
      .max(50, 'Nombre de usuario no debe superar los 50 caracteres'),
   email: yup
      .string()
      .trim()
      .required('El correo electrónico es un campo requerido')
      .matches(
         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
         'Por favor, ingresar un correo electrónico válido'
      )
      .email('El correo electrónico no es válido'),
   password: yup
      .string()
      .trim()
      .required('La contraseña es un campo obligatorio')
      .min(5, 'La contraseña debe tener un mínimo de 5 caracteres')
      .max(50, 'La contraseña debe tener un tamaño máximo de 50 caracteres')
      .matches(
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
         'La contraseña debe poseer al menos una mayúscula, una minúscula, un número y un caracteres especial'
      )
});

export const loginUserSchema = yup.object().shape({
   email: yup
      .string()
      .trim()
      .required('El correo electrónico es un campo requerido')
      .matches(
         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
         'Por favor, ingresar un correo electrónico válido'
      )
      .email('El correo electrónico no es válido'),
   password: yup
      .string()
      .trim()
      .required('La contraseña es un campo obligatorio')
      .min(5, 'La contraseña debe tener un mínimo de 5 caracteres')
      .max(50, 'La contraseña debe tener un tamaño máximo de 50 caracteres')
      .matches(
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
         'La contraseña debe poseer al menos una mayúscula, una minúscula, un número y un caracteres especial'
      )
});
