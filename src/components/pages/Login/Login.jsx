import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {


    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
        watch,
    } = useForm();

    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        if (isEmpty(errors)) {
            console.log('Form is valid');
        } else {
            console.log('Form is not valid');
            setServerError(null);
        }
    },[])

    const onSubmit = async (data) => {
        setServerError(null)
        try {
            
            const response = await axios.post(
                'https://92e1-2003-da-cf25-838-992a-b06-b639-7d0d.ngrok-free.app/login',
                data
            );
            if (response.status !== 200) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log('Response:', response.data);
            handleResponseData(response.data);
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
    };



    const rememberMe = useRef(null);

    const handleCheckBox = () => {
        const checkBox = rememberMe.current;
        checkBox.checked = !checkBox.checked;
    };

    const errorClasses = 'text-red-400 h-5 text-end';

    return (
        <div className="bg-slate-200 w-screen h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-slate-500 fixed w-full md:w-2/3 2xl:w-1/3 flex flex-col items-start justify-between gap-8 translate-y-1/2 bottom-1/2 translate-x-1/2 right-1/2 shadow-lg p-10 rounded-md"
            >
                <div className="text-white w-full flex flex-col h-20 gap-3">
                    <span>Enter your email</span>
                    <input
                        {...register('email', {
                            required: 'E-Mail is required',
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        className="text-slate-800 rounded-md p-2 outline-none focus:border-sky-400 focus:pb-1 focus:border-b-4 "
                        type="text"
                        placeholder="E-Mail"
                    />
                    <div className={errorClasses}>
                        {errors.email && errors.email.message}
                    </div>
                </div>
                <div className="text-white w-full flex h-20 flex-col gap-3">
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
                        className="w-full text-slate-800 h-9 focus:pb-1 p-2 outline-none focus:border-sky-500 focus:border-b-4 rounded-md"
                        type="password"
                        placeholder="Password"
                    />
                    <div className={errorClasses}>
                        {errors.password && errors.password.message}
                    </div>
                </div>
                <div className="flex justify-between w-full">
                    <div className="inline-flex gap-2">
                        <div className="pt-[2px]">
                            <input
                                ref={rememberMe}
                                type="checkbox"
                                name=""
                                id=""
                            />
                        </div>
                        <div
                            onClick={handleCheckBox}
                            className="text-white cursor-pointer select-none"
                        >
                            Remember me
                        </div>
                    </div>
                    <div>
                        <Link
                            to={'/register'}
                            className="text-sky-400 hover:text-blue-500"
                        >
                            Not a member yet?
                        </Link>
                    </div>
                </div>

                <div className={errorClasses}>{serverError && serverError}</div>
                <button className="bg-sky-500 text-white w-full h-10 rounded-md hover:bg-blue-500">
                    Login
                </button>
                <Link
                    to={'/'}
                    className=" text-sky-500 hover:text-blue-500 rounded-md"
                >
                    Home
                </Link>
            </form>
        </div>
    );
};

export default Login;
