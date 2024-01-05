import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ card, id }) => {
    return (
        <div className="h-96 bg-slate-400 flex flex-col p-2 px-3 rounded-lg items-center justify-around">
            <div className="h-[60%] w-full bg-slate-600 rounded-md">image {id}</div>
            <p>{card.title}</p>
            <p>${card.price}</p>
            <Link
                onClick={() => window.scrollTo(0, 0)}
                className="shadow-xl px-4 py-2"
                to={`/products/product/${id}`}>
                View Details
            </Link>
        </div>
    );
};

export default ProductItem;
