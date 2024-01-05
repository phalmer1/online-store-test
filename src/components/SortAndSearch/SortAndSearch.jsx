import React, { useEffect, useRef } from 'react';
import RangeInput from '../UI/RabgeInput/RangeInput';
import axios from 'axios';

const SortAndSearch = ({ categories, setCategory }) => {
    const categoryRef = useRef(null);

    const handleCategoryChange = () => {
        const selectedCategory = categoryRef.current.value;
        setCategory(selectedCategory);
        console.log(selectedCategory);
    };

    return (
        <div className="h-48 border-slate-400 border-2 p-10 ">
            <div className="grid grid-cols-4 gap-3">
                <input type="text" placeholder="" />
                <select
                    ref={categoryRef}
                    onChange={handleCategoryChange}
                    className="outline-none p-1 rounded-md uppercase"
                    name="categories"
                    id="category">
                    <option value="all">all</option>
                    {categories &&
                        categories.map((category, index) => (
                            <option value={category} key={'category' + index}>
                                {category}
                            </option>
                        ))}
                </select>
                <select name="brands" id="brand">
                    <option value="all">all</option>
                    {/* {brands.map((brand, index) => (
                        <option value={brand} key={'brand' + index}>
                            {brand}
                        </option>
                    ))} */}
                </select>
                <select name="" id=""></select>
                <RangeInput />
            </div>
        </div>
    );
};

export default SortAndSearch;
