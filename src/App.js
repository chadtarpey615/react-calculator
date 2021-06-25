import React, { useContext } from "react"
import Header from "./components/Header";
import Display from "./components/Display"
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import Divide from "./components/Divide"
import Multiply from "./components/Multiply"
import Equals from "./components/Equals"
import Add from "./components/Add";
import Subtract from "./components/Subtract"
import { CalculatorContext } from "./utils/CalculatorStore"
import './App.css';
// import { operations } from "./components/Equals"
function App() {
  const { input, setInput } = useContext(CalculatorContext);
  const { operator, setOperator } = useContext(CalculatorContext);
  const { secondInput, setSecondInput } = useContext(CalculatorContext);
  const { result, setResult } = useContext(CalculatorContext);

  const operations = (event) => {

    if (operator === "➖") {
      const subtractTwo = () => {
        setResult(Number(input) - Number(secondInput))
        setInput("");
        setSecondInput("");
        setOperator("");



      }
      subtractTwo();



    }
    if (operator === "➕") {
      const addTwo = () => {
        setResult(Number(input) + Number(secondInput))
        setInput("");
        setSecondInput("");
        setOperator("")


      }
      addTwo();
    }
    if (operator === "➗") {
      const divide = () => {
        setResult(Number(input).toFixed(2) / Number(secondInput).toFixed(2))
        setInput("");
        setSecondInput("");
        setOperator("")

      }
      divide();
    }
    if (operator === "✖️") {
      const multiply = () => {
        setResult(Number(input) * Number(secondInput))
        setInput("");
        setSecondInput("");
        setOperator("")

      }
      multiply();
    }

  }

  return (
    <>
      <Header />
      <div className="container">

        <Display />
        <div className="App">
          <Button name="7" value={7} number={7} />
          <Button value={8} number={8} />
          <Button value={9} number={9} />
          <Divide operations={operations} value={"➗"} />
          <Button value={4} number={4} />
          <Button value={5} number={5} />
          <Button value={6} number={6} />
          <Multiply operations={operations} value={"✖️"} />
          <Button value={1} number={1} />
          <Button value={2} number={2} />
          <Button value={3} number={3} />
          <Subtract operations={operations} value={"➖"} />
          <Button value={0} number={0} />
          <Button value={"."} number={"."} />
          <Add operations={operations} value={"➕"} />
          <Equals operations={operations} value={"＝"} />
          <ClearButton />

        </div>

      </div>
    </>
  );
}

export default App;
