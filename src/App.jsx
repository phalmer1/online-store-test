import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';
import { useEffect, useState } from 'react';
import ProductItemDetails from './components/ProductItemDetails/ProductItemDetails';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import CreatePost from './components/pages/CreatePost/CreatePost';
import { chunkMaker } from './data';
import axios from 'axios';

function App() {
    const [products, setProducts] = useState([]);
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        const url = 'https://dummyjson.com/products';
        axios
            .get(url)
            .then((response) => {
                const data = response.data;
                console.log('data', data);
                setProducts(data.products);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    console.log('cartList', cartList);

    return (
        <>
            <Routes>
                <Route index element={<Home cards={products} />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/products">
                    <Route index element={<Products products={products} />}></Route>
                    {products &&
                        products.map((card, index) => (
                            <Route
                                key={index}
                                path={`product/${card.id}`}
                                element={
                                    <ProductItemDetails setCartList={setCartList} card={card} />
                                }
                            />
                        ))}
                </Route>
                <Route
                    path="/cart"
                    element={<Cart cartList={cartList} setCartList={setCartList} />}></Route>
                <Route
                    path="/createpost"
                    element={<CreatePost cards={products} setProducts={setProducts} />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </>
    );
}

export default App;
