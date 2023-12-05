import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../Layout/Layout';

const CreatePost = ({cards,setProducts}) => {
    const [newProduct, setPost] = useState({});
    const nameRef = useRef(null);

    const nextId = cards.length
    const handleInputs = (e) => {
        setPost((prev) => {
            return {
                ...prev,
                id: nextId,
                [e.target.id]: e.target.value,
            };
        });
    };

    const createProduct = (e) => {
        e.preventDefault()
        setProducts([...cards, newProduct])  ;
    }

    
    useEffect(() => {
        console.log(cards);
    })

    return (
        <Layout>
            <form className="bg-slate-400 flex flex-col gap-10 items-center mx-auto h-[600px] shadow-lg p-10 rounded-md">
                <div className="grid grid-cols-2 gap-4">
                    <div className="items-start gap-4 flex flex-col">
                        <div className="w-full">
                            <span>Enter your Product Name</span>
                            <input
                                onChange={handleInputs}
                                ref={nameRef}
                                type="text"
                                id="product"
                                placeholder="Product Name"
                                className="w-full  focus:pb-1 p-2 outline-none focus:border-sky-500 focus:border-b-4 rounded-md"
                            />
                        </div>
                        <div className="w-full">
                            <span>Enter your Company Name</span>
                            <input
                                onChange={handleInputs}
                                type="text"
                                id="company"
                                placeholder="Company Name"
                                className="w-full  focus:pb-1 p-2 outline-none focus:border-sky-500 focus:border-b-4 rounded-md"
                            />
                        </div>
                        <div className="w-full">
                            <span>Enter your Description</span>
                            <textarea
                                onChange={handleInputs}
                                type=" text"
                                id="description"
                                placeholder="Description"
                                className="w-full  focus:pb-1 h-32 p-2 outline-none focus:border-sky-500 focus:border-b-4 rounded-md"
                            />
                        </div>
                        <div className="w-full grid grid-cols-2 gap-3">
                            <div className="">
                                <span>Enter your Price</span>
                                <input
                                onChange={handleInputs}
                                    type="text"
                                    id="price"
                                    placeholder="Price"
                                    className="w-full  focus:pb-1 p-2 outline-none focus:border-sky-500 focus:border-b-4 rounded-md"
                                />
                            </div>
                            <div className="">
                                <span>Enter your Quantity</span>
                                <input
                                onChange={handleInputs}
                                    type=" text"
                                    id="quantityId"
                                    placeholder="Quantity"
                                    className="w-full  focus:pb-1 p-2 outline-none focus:border-sky-500 focus:border-b-4 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="image" />
                        <div>
                            <span>{newProduct.product}</span><br />
                            <span>{newProduct.company}</span><br />
                            <span>{newProduct.description}</span><br />
                            <span>${newProduct.price}</span>
                        </div>
                    </div>
                </div>
                <button onClick={createProduct} className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded w-24">
                    Create{' '}
                </button>
            </form>
        </Layout>
    );
};

export default CreatePost;
