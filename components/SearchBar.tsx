import React from 'react';
import { useForm } from 'react-hook-form';

const SearchBar: React.FC = () => {
    const { handleSubmit, register, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        reset();
    };

    return (
        <div className='my-2'>
            <form className='w-100' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group m-0'>
                    <input
                        className='form-control'
                        type='text'
                        name='city'
                        ref={register}
                        placeholder='Search cities, users, payments...'
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
