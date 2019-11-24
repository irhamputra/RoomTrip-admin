import React from 'react';
import useForm from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                name='firstName'
                placeholder='first name'
                type='text'
                ref={register}
            />
            <input
                name='lastName'
                placeholder='last name'
                type='text'
                ref={register}
            />
            <input
                name='email'
                placeholder='email'
                type='email'
                ref={register}
            />
            <input
                name='password'
                placeholder='password'
                type='password'
                ref={register}
            />

            <button>Login</button>
        </form>
    );
};

export default Form;
