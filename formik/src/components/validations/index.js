import * as yup from 'yup';

const validations = yup.object().shape({
  email: yup.string().email('Введите корректный email').required('Введите email'),
  password: yup.string().min(6, 'Пароль должен быть не меньше 6 символов').required('Введите пароль'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совподают').required('Введите пароль повторно'),
});

export default validations;