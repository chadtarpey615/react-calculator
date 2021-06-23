import React, { useState, useContext } from 'react'
import { CalculatorContext } from "../utils/CalculatorStore"
const Button = ({ value, number }) => {
    const { input, setInput } = useContext(CalculatorContext);
    const { secondInput, setSecondInput } = useContext(CalculatorContext);


    const handleInputClick = (event) => {
        if (!input) {
            setInput(event.target.name)

        } else {
            setSecondInput(event.target.name)
        }
    }
    return (
        <>

            <button name={value} onClick={handleInputClick}>
                {value}
            </button>
        </>

    )
}

export default Button
