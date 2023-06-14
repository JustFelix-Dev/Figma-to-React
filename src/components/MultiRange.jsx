import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

function MultiRange() {
    const [minValue, set_minValue] = useState(20);
    const [maxValue, set_maxValue] = useState(100);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
    
    return(
        <div>
            <div className="range">
                <MultiRangeSlider
                    min={0}
                    max={100}
                    step={5}
                    minValue={minValue}
                    maxValue={maxValue}
                    barInnerColor= "rgb(0,0,0)"
                    label='false'
                    ruler='false'
                    onInput={(e) => {
                        handleInput(e);
                    }}
                />
                <div className="inputs">
                    <input type="text" inputMode="numeric" value={minValue} />
                    <input type="text" inputMode="numeric" value={maxValue} />
                    <input type="button" value="Filter" />
                </div>
            </div>
        </div>
    );
}
export default MultiRange;