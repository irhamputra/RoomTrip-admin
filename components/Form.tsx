import React, { useState } from 'react';
import Link from 'next/link';
import useForm from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Button, FormGroup, Col } from 'reactstrap';
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
    password: Yup.string()
        .min(6)
        .required()
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
            dispatchRegister().finally(() => setLoading(false));
        } else {
            dispatchLogin().finally(() => setLoading(false));
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {props.register ? (
                    <div>
                        <FormGroup row>
                            <Col md='12'>
                                <input
                                    disabled={loading}
                                    name='firstName'
                                    placeholder='First Name'
                                    type='text'
                                    ref={register}
                                    className={
                                        errors.firstName
                                            ? 'form-control text-input error'
                                            : 'form-control text-input'
                                    }
                                />
                                {errors.firstName && (
                                    <p className='input-feedback mb-0'>
                                        {errors.firstName.message}
                                    </p>
                                )}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md='12'>
                                <input
                                    disabled={loading}
                                    name='lastName'
                                    placeholder='Last Name'
                                    type='text'
                                    ref={register}
                                    className={
                                        errors.lastName
                                            ? 'form-control text-input error'
                                            : 'form-control text-input'
                                    }
                                />
                                {errors.lastName && (
                                    <p className='input-feedback mb-0'>
                                        {errors.lastName.message}
                                    </p>
                                )}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md='12'>
                                <input
                                    disabled={loading}
                                    name='city'
                                    placeholder='City'
                                    type='text'
                                    ref={register}
                                    className={
                                        errors.city
                                            ? 'form-control text-input error'
                                            : 'form-control text-input'
                                    }
                                />
                                {errors.city && (
                                    <p className='input-feedback mb-0'>
                                        {errors.city.message}
                                    </p>
                                )}
                            </Col>
                        </FormGroup>
                    </div>
                ) : null}
                <FormGroup row>
                    <Col md='12'>
                        <input
                            disabled={loading}
                            name='email'
                            placeholder='email'
                            type='email'
                            ref={register}
                            className={
                                errors.email
                                    ? 'form-control text-input error'
                                    : 'form-control text-input'
                            }
                        />
                        {errors.email && (
                            <p className='input-feedback mb-0'>
                                {errors.email.message}
                            </p>
                        )}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md='12'>
                        <input
                            disabled={loading}
                            name='password'
                            placeholder='password'
                            type='password'
                            ref={register}
                            className={
                                errors.password
                                    ? 'form-control text-input error'
                                    : 'form-control text-input'
                            }
                        />
                        {errors.password && (
                            <p className='input-feedback mb-0'>
                                {errors.password.message}
                            </p>
                        )}
                    </Col>
                </FormGroup>

                {loading ? (
                    <Button disabled={true}>loading...</Button>
                ) : (
                    <Button
                        color='primary'
                        className='btn btn-block text-white'
                    >
                        {props.register ? 'Register' : 'Login'}
                    </Button>
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
