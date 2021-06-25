import React, { useState, useContext } from 'react'
import { CalculatorContext } from "../utils/CalculatorStore"
// import { operations } from "../utils/functions"
const Equals = ({ value, operations }) => {

    const { input, setInput } = useContext(CalculatorContext);
    const { operator, setOperator } = useContext(CalculatorContext);
    const { secondInput, setSecondInput } = useContext(CalculatorContext);
    const { result, setResult } = useContext(CalculatorContext);


    return (
        <button data-testid="operations" onClick={operations} className="equals oper-btn">
            {value}
        </button>
    )
}

export default Equals;
