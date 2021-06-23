import React, { useContext } from 'react'
import { CalculatorContext } from "../utils/CalculatorStore"

const Equals = ({ value }) => {
    const { input, setInput } = useContext(CalculatorContext);
    const { operator, setOperator } = useContext(CalculatorContext);
    const { secondInput, setSecondInput } = useContext(CalculatorContext);
    const { result, setResult } = useContext(CalculatorContext);



    const operations = (event) => {
        if (operator === "➖") {
            const subtractTwo = () => {
                setResult(parseInt(input) - parseInt(secondInput))
                setInput("");
                setSecondInput("");
                setOperator("")
            }
            subtractTwo();
        }
        if (operator === "➕") {
            const addTwo = () => {
                setResult(parseInt(input) + parseInt(secondInput))
                setInput("");
                setSecondInput("");
                setOperator("")

            }
            addTwo();
        }
        if (operator === "➗") {
            const divide = () => {
                setResult(parseInt(input) / parseInt(secondInput))
                setInput("");
                setSecondInput("");
                setOperator("")

            }
            divide();
        }
        if (operator === "✖️") {
            const multiply = () => {
                setResult(parseInt(input) * parseInt(secondInput))
                setInput("");
                setSecondInput("");
                setOperator("")

            }
            multiply();
        }
    }



    return (
        <button onClick={operations} className="equals">
            {value}
        </button>
    )
}

export default Equals
