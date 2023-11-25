import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const rememberMe = useRef(null);

    const handleCheckBox = () => {
        const checkBox = rememberMe.current;
        checkBox.checked = !checkBox.checked;
    };

    return (
        <form className="bg-slate-500 max-w-md flex flex-col items-start justify-between gap-4 translate-y-1/2 mx-auto h-96 shadow-lg p-10 rounded-md">
            <div className="text-white w-full flex flex-col h-20 gap-3">
                <span>Enter your email</span>
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full h-9 focus:pb-1 p-2 outline-none focus:border-sky-500 focus:border-b-4 rounded-md"
                />
            </div>
            <div className="text-white w-full flex h-20 flex-col gap-3">
                <span>Enter your Password</span>
                <input
                    type="text"
                    placeholder="Password"
                    className="w-full h-9 focus:pb-1 p-2 outline-none focus:border-sky-500 focus:border-b-4 rounded-md"
                />
            </div>
            <div className="flex justify-between w-full">
                <div className="inline-flex gap-2">
                    <div className="pt-[2px]">
                        <input ref={rememberMe} type="checkbox" name="" id="" />
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
    );
};

export default Login;
