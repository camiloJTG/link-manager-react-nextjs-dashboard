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

export const registerUserValidation = yup.object().shape({
   username: yup
      .string()
      .required('Username is required')
      .min(1, 'Username cannot is empty')
      .max(50, 'Username cannot exceed fifty characters')
      .trim(),
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
         'The credential must have at least one uppercase letter, one lowercase letter, numbers and symbols. '
      )
});
