import React, { useContext } from 'react'
import { CalculatorContext } from "../utils/CalculatorStore"

const Display = ({ number }) => {
    const { input, setInput } = useContext(CalculatorContext);
    const { operator, setOperator } = useContext(CalculatorContext);
    const { secondInput, setSecondInput } = useContext(CalculatorContext);
    const { result, setResult } = useContext(CalculatorContext);


    return (
        <div title="display" className="display">
            {/* {result} */}
            {result ? result.toFixed(2) : result}
            {input}
            {operator}
            {secondInput}


        </div>
    )
}

export default Display
