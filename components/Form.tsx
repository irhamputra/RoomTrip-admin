import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import useForm from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Login } from '../types/FormData';
import { setValueForm, login, registerUser } from '../redux/actions/user';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string().required()
});

const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2)
        .required(),
    lastName: Yup.string()
        .min(2)
        .required(),
    city: Yup.string()
        .min(3)
        .required(),
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string().required()
});


const Form: React.FC<{ register?: boolean }> = props => {
    const [loading, setLoading] = useState(false);
    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    const dispatchLoginUser = data => dispatch(setValueForm(data));
    const dispatchLogin = async () => await dispatch(login());
    const dispatchRegister = async () => await dispatch(registerUser());

    const { register, handleSubmit, errors } = useForm<Login>({
        validationSchema: props.register ? RegisterSchema : LoginSchema
    });

    const onSubmit = data => {
        setLoading(true);
        dispatchLoginUser(data);
        if (props.register) {
            console.log(data);
            dispatchRegister().then(() => {
                Router.push('/dashboard').then(() => setLoading(false));
            });
        } else {
            dispatchLogin().then(() => {
                setLoading(true);
                Router.push('/dashboard').then(() => setLoading(false));
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {props.register ? (
                    <div>
                        <input
                            disabled={loading}
                            name='firstName'
                            placeholder='First Name'
                            type='text'
                            ref={register}
                        />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                        <input
                            disabled={loading}
                            name='lastName'
                            placeholder='Last Name'
                            type='text'
                            ref={register}
                        />
                        {errors.lastName && <p>{errors.lastName.message}</p>}

                        <input
                            disabled={loading}
                            name='city'
                            placeholder='City'
                            type='text'
                            ref={register}
                        />
                        {errors.city && <p>{errors.city.message}</p>}
                    </div>
                ) : null}

                <input
                    disabled={loading}
                    name='email'
                    placeholder='email'
                    type='email'
                    ref={register}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <input
                    disabled={loading}
                    name='password'
                    placeholder='password'
                    type='password'
                    ref={register}
                />
                {errors.password && <p>{errors.password.message}</p>}

                {loading ? (
                    <button disabled={true}>loading...</button>
                ) : (
                    <button>{props.register ? 'Register' : 'Login'}</button>
                )}
                {props.register
                    ? null
                    : user.error && (
                          <p>
                              This {user.login.email} is not registered{' '}
                              <Link href='/register'>
                                  <a>Register now!</a>
                              </Link>
                          </p>
                      )}
            </form>
        </>
    );
};

export default Form;
