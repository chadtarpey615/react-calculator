import React, { useContext } from 'react'
import { CalculatorContext } from "../utils/CalculatorStore"

const Add = ({ value }) => {
    const { operator, setOperator } = useContext(CalculatorContext)
    const handleInputClick = (event) => {
        setOperator(event.target.name)
    }

    return (
        <button className="oper-btn" name={value} onClick={handleInputClick}>
            {value}
        </button>
    )
}

export default Add


