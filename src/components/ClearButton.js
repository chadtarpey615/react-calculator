import React, { useContext } from 'react'
import { CalculatorContext } from "../utils/CalculatorStore"

const ClearButton = () => {
    const { input, setInput } = useContext(CalculatorContext);
    const { operator, setOperator } = useContext(CalculatorContext);
    const { secondInput, setSecondInput } = useContext(CalculatorContext);
    const { result, setResult } = useContext(CalculatorContext);

    const handleClick = () => {
        setInput("");
        setOperator("");
        setSecondInput("");
        setResult("");
    }
    return (
        <button onClick={handleClick} className="clear-btn">
            Clear
        </button>
    )
}

export default ClearButton
