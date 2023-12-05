import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import ProductItem from '../../ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import { sortInfo } from '../../../data';
import SortAndSearch from '../../SortAndSearch/SortAndSearch';
import axios from 'axios';

const Products = ({ cards, setBrand, locateId, chunkCards }) => {

    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState('');

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((response) => {
            const data = response.data;
            setProducts(data.products);
        });
    },[]);

    products.map((product) => {
        if(brands.includes(product.brand) === false) {
            setBrands((prevBrands) => [...prevBrands, product.brand]);
        }
    })
    console.log(brands)

    return (
        <Layout>
            <SortAndSearch
                setBrand={setBrand}
                categories={sortInfo.categories}
                brands={sortInfo.brands}
            />
            <div className="text-lg p-3 mb-6 border-b-2 border-slate-400">
                {cards.length} products
            </div>
            <div className="grid grid-cols-3 gap-2">
                {cards.map((card, index) => (
                    <ProductItem key={index} card={card} id={index + 1} />
                ))}
            </div>
            <div className="flex justify-center mt-4 mb-10 text-xl gap-2 p-3 bg-slate-600">
                {chunkCards &&
                    chunkCards.map((el, index) => (
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
                    ))}
            </div>
        </Layout>
    );
};

export default Products;
