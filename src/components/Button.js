import React, { useContext } from 'react'
import { CalculatorContext } from "../utils/CalculatorStore"

const Button = ({ value, number }) => {
    const { input, setInput } = useContext(CalculatorContext);
    const { secondInput, setSecondInput } = useContext(CalculatorContext);
    const { operator, setOperator } = useContext(CalculatorContext);
    const { result, setResult } = useContext(CalculatorContext);



    const handleInputClick = (number) => {
        if (result) {
            setInput(result)
            setResult("")

        }
        if (operator === "") {
            setInput(input + number);
        } else {
            setSecondInput(secondInput + number)
        }


    }
    return (
        <>
            <button className="number-btns" name={value} onClick={() => {
                handleInputClick(number)
            }}>
                {value}
            </button>
        </>
    )
}

export default Button
