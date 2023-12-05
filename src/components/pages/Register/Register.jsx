import axios from 'axios';
import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }



    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
        watch,
        clearErrors,
    } = useForm();

    const rememberMe = useRef(null);

    const handleCheckBox = () => {
        const checkBox = rememberMe.current;
        checkBox.checked = !checkBox.checked;
    };

    const onSubmit = useCallback(async (data) => {
        try {
            clearErrors();
            const response = await axios.post(
                'https://92e1-2003-da-cf25-838-992a-b06-b639-7d0d.ngrok-free.app/register',
                data
            );
            if (response.status !== 200) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log('Response:', response.data);
            return response.data;
        } catch (error) {
            if (error.response) {
                console.error('Error:', error.response.data.message);
                setServerError(error.response.data.message);
            } else {
                console.error('Error:', error.message);
                setServerError(
                    'An error occurred while processing your request.'
                );
            }
        }
    },[setError,clearErrors]);

    
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        if (isEmpty(errors)) {
            console.log('Form is valid');
        } else {
            console.log('Form is not valid');
            setServerError(null);
        }
    },[]);

    const password = watch('password', '');

    const errorClass = 'text-red-400 h-5 text-end';


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="fixed bg-slate-500 text-white w-full md:w-2/3 2xl:w-1/3 translate-x-1/2 right-1/2 translate-y-1/2 bottom-1/2 rounded-md shadow-xl px-10 py-10  gap-5 "
        >
            <span className="text-3xl">Register</span>
            <div className=" grid grid-cols-2 md:grid-cols-1 gap-3">
                <div>
                    <div className="flex flex-col gap-3">
                        <span>Enter your Name</span>
                        <input
                            {...register('fullName', {
                                required: 'Name is required',
                            })}
                            className="text-slate-800 rounded-md p-2 outline-none focus:border-sky-400 focus:pb-1 focus:border-b-4 "
                            type="text"
                            placeholder="Name"
                        />

                        <div className={errorClass}>
                            {errors.fullName && errors.fullName.message}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span>Enter your E-Mail</span>
                        <input
                            {...register('email', {
                                required: 'E-Mail is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            className="text-slate-800 rounded-md p-2 outline-none focus:border-sky-400 focus:pb-1 focus:border-b-4 "
                            type="text"
                            placeholder="E-Mail"
                        />
                        <div className={errorClass}>
                            {errors.email && errors.email.message}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full flex-col gap-3">
                        <span>Enter your Password</span>
                        <input
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message:
                                        'Password must be at least 6 characters',
                                },
                            })}
                            className="text-slate-800 rounded-md p-2 outline-none focus:border-sky-400 focus:pb-1 focus:border-b-4 "
                            type="password"
                            placeholder="Password"
                        />
                        <div className={errorClass}>
                            {errors.password && errors.password.message}
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-3">
                        <span>Repeat your Password</span>
                        <input
                            {...register('repassword', {
                                validate: (value) =>
                                    value === password ||
                                    'Passwords do not match',
                            })}
                            className="text-slate-800 rounded-md p-2 outline-none focus:border-sky-400 focus:pb-1 focus:border-b-4 "
                            type="password"
                            placeholder="Repeat Password"
                        />
                        <div className={errorClass}>
                            {errors.repassword && errors.repassword.message}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full">
                <div className="flex gap-3">
                    <input
                        {...register('remember')}
                        ref={rememberMe}
                        type="checkbox"
                        name="remember"
                        id="rem"
                    />
                    <div
                        onClick={handleCheckBox}
                        className="select-none cursor-pointer"
                    >
                        Remember me
                    </div>
                </div>

                <Link
                    className="text-sky-400 hover:text-blue-400"
                    to={'/login'}
                >
                    Already a member?
                </Link>
            </div>
            <div className={errorClass}>
                {serverError && serverError}
            </div>
            <div className='flex justify-between w-full'>
                <button
                    type="submit"
                    className="w-1/4 bg-sky-400 p-1 hover:bg-blue-500 rounded-md"
                >
                    Register
                </button>
                <Link
                    className=" text-sky-400 hover:text-blue-500"
                    to={'/'}
                >
                    Home
                </Link>
            </div>
        </form>
    );
};

export default Register;
