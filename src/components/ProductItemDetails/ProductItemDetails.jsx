import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';

const ProductItemDetails = ({ card, setCartList }) => {
    const [count, setCount] = useState(1);

    const setCartItem = () => {
        setCartList((prevCartList) => {
            const existingItem = prevCartList.find((item) => item.id === card.id);
    
            if (existingItem) {
                return prevCartList.map((item) =>
                    item.id === card.id
                        ? { ...item, count: item.count + count }
                        : item
                );
            } else {
                return [...prevCartList, { ...card, count }];
            }
        });
    };

    console.log(card)

    return (
        <Layout>
            <div>
                <Link className="hover:underline" to={'/'}>
                    Home
                </Link>{' '}
                /{' '}
                <Link className="hover:underline" to={'/products'}>
                    Products
                </Link>
            </div>
            <div className=" mt-28 grid grid-cols-2 gap-4">
                <div className="bg-slate-400 h-96">Photo</div>
                <div className="grid grid-flow-row h-96 pl-6 gap-3">
                    <span>{card.title}</span>
                    <span>{card.brand}</span>
                    <span>${card.price}</span>
                    <span>{card.description}</span>
                    <select
                        onChange={(e) => setCount(Number(e.target.value))}
                        name="count"
                        id="countSelect"
                        className="w-28 h-7 text-sm rounded-sm outline-none"
                    >
                        {[1,2,3,4,5,6,7,8].map((value,index) => (
                            <option key={'option' + index} value={value}>{value}</option>
                        ))}
                    </select>
                </div>
            </div>
            <button onClick={setCartItem} className="mx-auto mt-10">
                Add to cart
            </button>
        </Layout>
    );
};

export default ProductItemDetails;
