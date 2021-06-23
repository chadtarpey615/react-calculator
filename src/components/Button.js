import React, { useState, useContext } from 'react'
import { CalculatorContext } from "../utils/CalculatorStore"
const Button = ({ value, number }) => {
    const { input, setInput } = useContext(CalculatorContext)

    const handleInputClick = (event) => {
        setInput(event.target.name)
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
