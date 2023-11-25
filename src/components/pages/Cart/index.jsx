import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import CartProductItem from '../../CartProductItem/CartProductItem';

const Cart = ({ cartList,setCartList }) => {

    const [price,setPrice] = useState({
        
    })

    useEffect(() => {
        setPrice({firstPrice: cartList.reduce((acc, item) => acc + item.price*item.count, 0),
            nalkis: Math.round(cartList.reduce((acc, item) => acc + item.price*item.count, 0)*0.032),
            nalgrav: Math.round(cartList.reduce((acc, item) => acc + item.price*item.count, 0)*0.062),
            jobcenter: Math.round(cartList.reduce((acc, item) => acc + item.price*item.count, 0)*0.144),})
    },[cartList])


    return (
        <Layout>
            
            <div className="text-2xl pb-10 border-b-2 border-slate-400 mb-10">
                Shoping cart
            </div>
            <div className='grid grid-cols-3 gap-8'>
                <div className='col-span-2 flex flex-col gap-3'>
                    {cartList[0] ? cartList.map((item, index) => (
                            <CartProductItem key={index} item={item} setCartList={setCartList}/>
                            
                    ))
                : <p className='text-2xl'>Cart is empty</p>}
                </div>
                <div className='bg-slate-400 flex flex-col justify-around p-5 h-60 rounded-lg'>
                    <p>price = ${price.firstPrice}</p>
                    <div className='border-l-2 border-slate-200 ml-4 pl-2'>
                        <p>nalog na kislorod = ${price.nalkis}</p>
                        <p>nalog na gravitaziu = ${price.nalgrav}</p>
                        <p>chut chut jobcentru = ${price.jobcenter}</p>
                    </div>
                    <p>total price = ${price.firstPrice-price.nalkis + price.nalgrav + price.jobcenter}</p>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
