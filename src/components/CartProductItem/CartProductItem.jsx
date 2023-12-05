import React, { useEffect, useRef } from 'react';

const CartProductItem = ({ item, setCartList }) => {
    const selectRef = useRef(null);

    useEffect(() => {
        const selectElement = selectRef.current;
        if (selectElement && item) {
            selectElement.value = item.count.toString();
        }
    }, [item]);

    const removeItem = () => {
        setCartList((prevList) =>
            prevList.filter((listItem) => listItem.id !== item.id)
        );
    };

    const handleChange = () => {
        const selectElement = selectRef.current;
        const newCount = Number(selectElement.value);
        setCartList((prevList) =>
            prevList.map((listItem) =>
                listItem.id === item.id ? { ...listItem, count: newCount } : listItem
            )
        );
    };

    return (
        <div className="flex h-40 shadow-2xl w-full rounded-lg bg-slate-400 p-2 justify-around">
            <div className="bg-slate-100 w-1/4 rounded-md">image</div>
            <div className="flex flex-col justify-around">
                <div>{item.title}</div>
                <div>{item.brand}</div>
                <div>color</div>
            </div>
            <div className="flex flex-col justify-around">
                <div>Amount</div>
                <select
                    ref={selectRef}
                    onChange={handleChange}
                    name="count"
                    id={`countSelect${item.id}`}
                    className="w-28 h-7 text-sm rounded-sm outline-none"
                >
                    {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18, 19, 20,
                    ].map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
                <button
                    onClick={removeItem}
                    className="text-start text-slate-600 hover:text-slate-500"
                >
                    Remove
                </button>
            </div>
            <div>
                <div>price - ${item.price}</div>
                <div>total price - ${item.price * item.count}</div>
            </div>
        </div>
    );
};

export default CartProductItem;
