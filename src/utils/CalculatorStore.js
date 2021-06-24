import React, { useState } from 'react';


export const CalculatorContext = React.createContext();


const CalculatorStore = ({ children }) => {
    const [input, setInput] = useState("");
    const [operator, setOperator] = useState("");
    const [secondInput, setSecondInput] = useState("");
    const [result, setResult] = useState();
    const providerValue = {
        input, setInput,
        operator, setOperator,
        secondInput, setSecondInput,
        result, setResult
    }

    return (
        <CalculatorContext.Provider
            value={providerValue}
        >
            {children}
        </CalculatorContext.Provider>
    )
}
export default CalculatorStore;