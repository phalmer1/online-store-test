import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import module from './rangeInput.module.css';

const RangeInput = () => {
    const [sliderValue, setSliderValue] = useState([2500, 7500]);

    const handleSliderChange = (value) => {
        setSliderValue(value);
    };

    const handleChangeMin = (e) => {
        if(e.target.value < 0) {
            setSliderValue([0, sliderValue[1]]);
        } else {
            setSliderValue([e.target.value, sliderValue[1]]);
        }
    };

    const handleChangeMax = (e) => {
        if (e.target.value > 10000) {
            setSliderValue([sliderValue[0], 10000]);
        } else {
            setSliderValue([sliderValue[0], e.target.value]);
        }
    };

    return (
        <div className='flex flex-col gap-6 py-5'>
            <div className="grid grid-cols-3 gap-7">
                <input
                    className={module.input}
                    type="number"
                    value={sliderValue[0]}
                    onChange={handleChangeMin}
                />
                <div className="text-white text-center">-</div>
                <input
                    className={module.input}
                    type="number"
                    value={sliderValue[1]}
                    onChange={handleChangeMax}
                />
            </div>

            <Slider
            className='w-[90%] mx-auto'
                min={0}
                max={10000}
                step={100}
                range
                value={sliderValue}
                onChange={handleSliderChange}
            />
        </div>
    );
};

export default RangeInput;
