import React, { useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { Link } from 'react-router-dom';

const ProductList = ({ cards }) => {
    const range = 9;
    const pages = [];
    const [currentPage, setCurrentPage] = useState(1);

    for (let i = 0; i < cards.length; i += range) {
        pages.push(cards.slice(i, i + range));
    }

    return (
        <>
            <div className="text-lg p-3 mb-6 border-b-2 border-slate-400">
                {cards.length} products
            </div>
            <div className="grid grid-cols-3 gap-2">
                {currentPage &&
                    pages[currentPage - 1] &&
                    pages[currentPage - 1].map((card, index) => (
                        <ProductItem key={index} card={card} id={index + 1} />
                    ))}
            </div>
            <div className="flex justify-center mt-4 mb-10 text-xl gap-2 p-3 bg-slate-600">
                {pages.length > 1 &&
                    pages.map((_, index) => (
                        <div
                            className={`${
                                index === currentPage - 1 ? 'bg-slate-400' : 'bg-slate-500'
                            } px-1 rounded-md pointer-events-auto cursor-pointer`}
                            onClick={() => setCurrentPage(index + 1)}
                            key={index}
                            id={`number${index}`}
                            to={`/products/${index !== 0 ? index + 1 : ''}`}>
                            {index + 1}
                        </div>
                    ))}
            </div>
        </>
    );
};

export default ProductList;
