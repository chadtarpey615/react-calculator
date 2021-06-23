import React, { useContext } from 'react';
import { CalculatorContext } from "../utils/CalculatorStore";

const Divide = ({ value }) => {
    const { operator, setOperator } = useContext(CalculatorContext);

    const handleInputClick = (event) => {
        setOperator(event.target.name)
    }
    return (
        <button name={value} onClick={handleInputClick}>
            {value}
        </button>
    )
}

export default Divide;
