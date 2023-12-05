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

    const [brand, setBrand] = useState('');
    const [sortedCards, setSortedCards] = useState(products && products);

    useEffect(() => {
        const url = 'https://dummyjson.com/products';
        axios
            .get(url)
            .then((response) => {
                const data = response.data;
                console.log(data)
                setProducts(data.products);
            })
            .catch((error) => {
                console.error(error);
            });
    },[]);

    useEffect(() => {
        let filteredCards = products && products;
        if (brand && brand !== 'all') {
            filteredCards = products.filter((card) => card.brand === brand);
        }
        setSortedCards(filteredCards);
    }, [brand, products]);

    const chunkCards = sortedCards && chunkMaker(sortedCards, 9);

    console.log();

    return (
        <>
            <Routes>
                <Route index element={<Home cards={products} />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/products">
                    {!chunkCards[1] ? (
                        <Route
                            index
                            element={
                                <Products
                                    cards={sortedCards}
                                    setCompany={setBrand}
                                    products={products}
                                />
                            }
                        ></Route>
                    ) : (
                        <Route path="/products">
                            {chunkCards.map((chunk, index, arr) =>
                                index > 0 ? (
                                    <Route
                                        key={'products' + index}
                                        path={`/products/${index + 1}`}
                                        element={
                                            <Products
                                                cards={chunk}
                                                chunkCards={chunkCards}
                                                locateId={index}
                                                setCompany={setBrand}
                                            />
                                        }
                                    />
                                ) : (
                                    <Route
                                        key={'products' + index}
                                        index
                                        element={
                                            <Products
                                                cards={chunkCards[0]}
                                                locateId={index}
                                                chunkCards={chunkCards}
                                                setCompany={setBrand}
                                            />
                                        }
                                    />
                                )
                            )}
                        </Route>
                    )}
                    {products.map((card, index) => (
                        <Route
                            key={'details' + index}
                            path={`product/${index + 1}`}
                            element={
                                <ProductItemDetails
                                    setCartList={setCartList}
                                    cartList={cartList}
                                    card={card}
                                />
                            }
                        ></Route>
                    ))}
                    {}
                </Route>
                <Route
                    path="/cart"
                    element={
                        <Cart cartList={cartList} setCartList={setCartList} />
                    }
                ></Route>
                <Route
                    path="/createpost"
                    element={
                        <CreatePost
                            cards={products}
                            setProducts={setProducts}
                        />
                    }
                ></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </>
    );
}

export default App;
