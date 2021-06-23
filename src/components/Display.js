import React, { useContext } from 'react'
import { CalculatorContext } from "../utils/CalculatorStore"

const Display = ({ number }) => {
    const { input, setInput } = useContext(CalculatorContext);
    const { operator, setOperator } = useContext(CalculatorContext);
    const { secondInput, setSecondInput } = useContext(CalculatorContext);
    const { result, setResult } = useContext(CalculatorContext);

    console.log(input)
    return (
        <div className="form">
            {input}
            {operator}
            {secondInput}
            <br />
            {result}

        </div>
    )
}

export default Display
