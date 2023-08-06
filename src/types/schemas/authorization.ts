import * as yup from 'yup';

export const loginUserValidation = yup.object().shape({
   email: yup
      .string()
      .required('Email is required')
      .min(1, 'Email cannot is empty')
      .max(100, 'Email cannot exceed one hundred characters')
      .trim()
      .email('Email format is not correct'),
   password: yup
      .string()
      .required('Password is required')
      .min(1, 'Password cannot is empty')
      .max(70, 'Password cannot exceed seventy characters')
      .trim()
      .matches(
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
         'Invalid credentials'
      )
});
