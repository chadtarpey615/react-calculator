import React, { useState } from 'react';


export const CalculatorContext = React.createContext();


const CalculatorStore = ({ children }) => {
    const [input, setInput] = useState();

    return (
        <CalculatorContext.Provider
            value={{ input, setInput }}
        >
            {children}
        </CalculatorContext.Provider>
    )
}