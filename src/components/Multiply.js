import React, { useContext } from 'react';
import { CalculatorContext } from "../utils/CalculatorStore";

const Multiply = ({ value, operations }) => {
    const { operator, setOperator } = useContext(CalculatorContext);
    const { secondInput, setSecondInput } = useContext(CalculatorContext);


    const handleInputClick = (event) => {
        setOperator(value)
    }
    return (
        <button title="multiplyButton" className="oper-btn" name={value} onClick={() => {
            if (secondInput) {
                operations();
            }
            handleInputClick(value)
        }}>
            {value}
        </button>
    )
}

export default Multiply;
