import React from 'react';
import useForm from 'react-hook-form';
import { Login } from '../types/FormData';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string().required()
});

const Form: React.FC = () => {
    const { register, handleSubmit, errors } = useForm<Login>({
        validationSchema: LoginSchema
    });
    const onSubmit = data => console.log(data);

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                name='email'
                placeholder='email'
                type='email'
                ref={register}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input
                name='password'
                placeholder='password'
                type='password'
                ref={register}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button>Login</button>
        </form>
    );
};

export default Form;
