import React, { useRef } from 'react';
import RangeInput from '../UI/RabgeInput/RangeInput';

const SortAndSearch = ({categories, brands, setBrand}) => {


    const categoryRef = useRef(null);


    
    const handleCategoryChange = () => {
        const selectedCategory = categoryRef.current.value;
        setBrand(selectedCategory);
    };

    return (
        <div className="h-48 border-slate-400 border-2 p-10 ">
            <div className="grid grid-cols-4 gap-3">
                <input type="text" placeholder="" />
                <select name="categories" id="category">
                    {categories.map((category, index) => (
                        <option value={category} key={'category' + index}>
                            {category}
                        </option>
                    ))}
                </select>
                <select
                    name="brands"
                    id="brand"
                    onChange={handleCategoryChange}
                    ref={categoryRef}
                >
                    <option value="all">all</option>
                    {brands.map((brand, index) => (
                        <option value={brand} key={'brand' + index}>
                            {brand}
                        </option>
                    ))}
                </select>
                <select name="" id=""></select>
                <RangeInput />
            </div>
        </div>
    );
};

export default SortAndSearch;
