import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({location}) => {
    return (
            <div className='flex justify-between w-1/3 mx-auto py-4'>
                <Link onClick={() => window.scrollTo(0, 0)} to="/" className= {`rounded-md py-1 px-4 ${location.pathname == '/' && 'bg-slate-500'}`}>Home</Link>
                <Link onClick={() => window.scrollTo(0, 0)} to="/about" className= {`rounded-md py-1 px-4 ${location.pathname == '/about' && 'bg-slate-500'}`}>About</Link>
                <Link onClick={() => window.scrollTo(0, 0)} to="/products" className= {`rounded-md py-1 px-4 ${location.pathname.includes('/products') && 'bg-slate-500'}`}>Products</Link>
                <Link onClick={() => window.scrollTo(0, 0)} to="/cart" className= {`rounded-md py-1 px-4 ${location.pathname == '/cart' && 'bg-slate-500'}`}>Cart</Link>
            </div>
    );
};

export default Navbar;
