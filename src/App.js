import React, { useState, useEffect } from "react"
import Header from "./components/Header";
import Display from "./components/Display"
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import Divide from "./components/Divide"
import Multiply from "./components/Multiply"
import Equals from "./components/Equals"
import Add from "./components/Add";
import Subtract from "./components/Subtract"
import CalculatorStore from "./utils/CalculatorStore"
import './App.css';
// import { operations } from "./components/Equals"
function App() {


  return (
    <>
      <Header />
      <div className="container">
        <CalculatorStore>
          <Display />
          <div className="App">
            <Button name="7" value={7} number={7} />
            <Button value={8} number={8} />
            <Button value={9} number={9} />
            <Divide value={"➗"} />
            <Button value={4} number={4} />
            <Button value={5} number={5} />
            <Button value={6} number={6} />
            <Multiply value={"✖️"} />
            <Button value={1} number={1} />
            <Button value={2} number={2} />
            <Button value={3} number={3} />
            <Subtract value={"➖"} />
            <Button value={0} number={0} />
            <Button value={"."} number={"."} />
            <Add value={"➕"} />
            <Equals value={"＝"} />
            <ClearButton />

          </div>
        </CalculatorStore>
      </div>
    </>
  );
}

export default App;
