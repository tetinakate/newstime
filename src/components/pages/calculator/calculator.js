import React, { useState } from "react";

import "./calculator.css";

export const Calculator = () => {
    const [value, setValue] = useState("");
    const [res, setRes] = useState([]);


    const handleClick = (event) => {
        if(value === "0"){
            return setValue(event.target.dataset.value);
        }
        return setValue(value + event.target.dataset.value);
    };
    const handleClickClear = () => {
        setValue("");
        setRes("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            setRes(eval(value));
        } catch {
            setRes('err')
            setTimeout(() => {
                setRes('')
                setValue('')
            }, 1500)
        }
    };

    // TODO: переделать на цикл
    return(
        <div className="container-block calculator">
            <h1>Калькулятор</h1>
            <div>
                <div className="calc-result">{ value }</div>
                <div className="calc-result">{ res }</div>
                <form className="calc" onSubmit={handleSubmit}>
                    <div className="left-side">
                        <div className="value" data-value="7" onClick={handleClick}>7</div>
                        <div className="value" data-value="8" onClick={handleClick}>8</div>
                        <div className="value" data-value="9" onClick={handleClick}>9</div>
                        <div className="value" data-value="4" onClick={handleClick}>4</div>
                        <div className="value" data-value="5" onClick={handleClick}>5</div>
                        <div className="value" data-value="6" onClick={handleClick}>6</div>
                        <div className="value" data-value="1" onClick={handleClick}>1</div>
                        <div className="value" data-value="2" onClick={handleClick}>2</div>
                        <div className="value" data-value="3" onClick={handleClick}>3</div>

                        
                        <div className="value" data-value="C" onClick={handleClickClear}>C</div>
                        <div className="value" data-value="0" onClick={handleClick}>0</div>
                        <div className="value" data-value="/" onClick={handleClick}>/</div>
                    </div>
                    <div className="right-side">
                        <div className="value" data-value="*" type="text"  onClick={handleClick} >*</div>
                        <div className="value" data-value="+" type="text"  onClick={handleClick} >+</div>
                        <div className="value" data-value="-" type="text"  onClick={handleClick} >-</div>
                        <input value="=" type="submit" onSubmit={handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    )
}