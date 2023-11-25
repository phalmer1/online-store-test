import React from 'react';
import Layout from '../../Layout/Layout';
import { Link } from 'react-router-dom';
import ProductItem from '../../ProductItem/ProductItem';

const Home = ({cards}) => {
    return (
        <Layout>
            <div className="flex justify-between pt-20">
                <div className="w-[45%] h-96 flex flex-col justify-between">
                    <p className="text-4xl">
                        One two three four five six words
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique vitae ullam iste quaerat tot am dolorem
                        facilis illum maxime quibusdam. Enim sint eligendi, quod
                        minus voluptatibus eveniet eaque rem amet distinctio.
                    </p>
                    <Link onClick={() => window.scrollTo(0, 0)} className="text-center py-1 w-28 bg-slate-400 rounded-sm" to={'/products'}>
                        Click
                    </Link>
                </div>
                <div className="text-6xl h-96 text-center w-[45%] bg-slate-600 rounded-xl">
                    PICTURE
                </div>
            </div>
            <div className="text-2xl border-b-2 py-4 my-12 border-slate-400">
                One two words
            </div>
            <div className='grid grid-cols-3 gap-3 mb-20'>
                {cards.map((card,index) => index<=2 &&<ProductItem key={index} card={card}/>)}
            </div>
        </Layout>
    );
};

export default Home;
