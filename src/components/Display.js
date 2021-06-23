import React, { useContext } from 'react'
import { CalculatorContext } from "../utils/CalculatorStore"

const Display = ({ number }) => {
    const { input, setInput } = useContext(CalculatorContext)
    console.log(input)
    return (
        <form>
            <input type="text" readOnly />{input}

        </form>
    )
}

export default Display
