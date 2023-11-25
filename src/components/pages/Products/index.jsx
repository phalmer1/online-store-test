import React from 'react';
import Layout from '../../Layout/Layout';
import ProductItem from '../../ProductItem/ProductItem';
import { Link } from 'react-router-dom';

const Products = ({ cards, arr, locateId }) => {
    return (
        <Layout>
            <div className="h-48 border-slate-400 border-2 p-10">Searching</div>
            <div className="text-lg p-3 mb-6 border-b-2 border-slate-400">
                {cards.length} products
            </div>
            <div className="grid grid-cols-3 gap-2">
                {cards.map((card, index) => (
                    <ProductItem key={index} card={card} />
                ))}
            </div>
            <div className="flex justify-center mt-4 mb-10 text-xl gap-2 p-3 bg-slate-600">
                {arr &&
                    arr.map((el, index) => {
                        return (
                            <Link
                                className={
                                    index === locateId
                                        ? 'bg-slate-400 px-1 rounded-md pointer-events-none'
                                        : 'bg-slate-500 px-1 rounded-md pointer-events-auto'
                                } 
                                onClick={() => window.scrollTo(0, 0)}
                                key={index}
                                id={`number${index}`}
                                to={`/products/${index !== 0 ? index + 1 : ''}`}
                            >
                                {index + 1}
                            </Link>
                        );
                    })}
            </div>
        </Layout>
    );
};

export default Products;
