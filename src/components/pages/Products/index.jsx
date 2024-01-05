import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import { sortInfo } from '../../../data';
import SortAndSearch from '../../SortAndSearch/SortAndSearch';
import axios from 'axios';
import ProductList from '../../ProductList/ProductList';

const Products = ({ products }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get('https://dummyjson.com/products/categories')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const [category, setCategory] = useState('');
    const [sortedCards, setSortedCards] = useState(products && products);

    useEffect(() => {
        let filteredCards = products && products;
        if (category && category !== 'all') {
            filteredCards = products.filter((card) => card.category === category);
        }
        setSortedCards(filteredCards);
    }, [category, products]);

    console.log('category', categories);
    console.log('sorted', sortedCards);

    return (
        <Layout>
            <SortAndSearch setCategory={setCategory} categories={categories} />
            <ProductList cards={sortedCards} />
        </Layout>
    );
};

export default Products;
