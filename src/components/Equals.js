import React, { useState, useContext } from 'react'
import { CalculatorContext } from "../utils/CalculatorStore"
// import { operations } from "../utils/functions"
const Equals = ({ value }) => {

    const { input, setInput } = useContext(CalculatorContext);
    const { operator, setOperator } = useContext(CalculatorContext);
    const { secondInput, setSecondInput } = useContext(CalculatorContext);
    const { result, setResult } = useContext(CalculatorContext);
    const [newResult, setNewResult] = useState("");



    const operations = (event) => {
        if (operator === "➖") {
            const subtractTwo = () => {
                setResult(Number(input) - Number(secondInput))
                setInput("");
                setSecondInput("");
                setOperator("")


            }
            subtractTwo();



        }
        if (operator === "➕") {
            const addTwo = () => {
                setResult(parseInt(input) + parseInt(secondInput))
                setNewResult(parseInt(input) + parseInt(secondInput))
                setInput("");
                setSecondInput("");
                setOperator("")


            }
            addTwo();
        }
        if (operator === "➗") {
            const divide = () => {
                setResult(parseInt(input).toFixed(2) / parseInt(secondInput).toFixed(2))
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
        <button data-testid="operations" onClick={operations} className="equals oper-btn">
            {value}
        </button>
    )
}

export default Equals;
