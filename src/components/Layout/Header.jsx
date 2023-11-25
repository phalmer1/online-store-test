import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();

    return (
        <header>
            <div className='bg-slate-800 py-1'>
                <div className='text-white max-w-6xl mx-auto flex justify-end gap-3'>
                    <Link className='text-white' to={'/login'}>Sign in</Link>
                    <span className='cursor-default'>/</span>
                    <Link className='text-white' to={'/register'}>Sign up</Link>
                </div>
            </div>
            <div className="bg-slate-300 w-full">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to="/"
                        className=""
                    >
                        Logo
                    </Link>
                    <Navbar location={location} />
                    <div className="flex flex-col items-center">
                        <span className="">
                            D/
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to="/cart"
                            >
                                C
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
