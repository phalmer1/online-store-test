import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';
import { cards } from './data';
import { useState } from 'react';
import ProductItemDetails from './components/ProductItemDetails/ProductItemDetails';
import Login from './components/pages/Login/Login';
import Register from './components/Register/Register';

function App() {

    const [cartList, setCartList] = useState([]);

    const chunkCards = [];

    const chunk = 9;

    console.log(cartList);

    for (let i = 0; i < cards.length; i += chunk) {
        chunkCards.push(cards.slice(i, i + chunk));
    }

    return (
        <>
            <Routes>
                <Route index element={<Home cards={cards} />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/products">
                    {!chunkCards[1] ? (
                        <Route
                            index
                            element={<Products cards={cards} />}
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
                                                arr={chunkCards}
                                                locateId={index}
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
                                                arr={chunkCards}
                                                locateId={index}
                                            />
                                        }
                                    />
                                )
                            )}
                        </Route>
                    )}
                    {cards.map((card, index) => (
                        <Route
                            key={'details' + index}
                            path={`product/${card.id}`}
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
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </>
    );
}

export default App;
