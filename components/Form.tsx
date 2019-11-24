import React from 'react';
import useForm from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Login } from '../types/FormData';
import * as Yup from 'yup';
import { loginUser, login } from '../redux/actions/user';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string().required()
});

const Form: React.FC = () => {
    const dispatch = useDispatch();
    const dispatchLoginUser = data => dispatch(loginUser(data));
    const dispatchLogin = () => dispatch(login());

    const { register, handleSubmit, errors } = useForm<Login>({
        validationSchema: LoginSchema
    });

    const onSubmit = data => {
        dispatchLoginUser(data);
        if (data) {
            dispatchLogin();
        }
    };

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
