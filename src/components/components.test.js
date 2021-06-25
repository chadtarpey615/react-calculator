
import { render, fireEvent } from "@testing-library/react"
import Button from "./Button";
import Equals from "./Equals";
import Add from "./Add";
import Subtract from "./Subtract";
import Multiply from "./Multiply";
import Divide from "./Divide";
import ClearButton from "./ClearButton";
import Display from "./Display";
import CalculatorStore from "./../utils/CalculatorStore";



it("checkButtonRender", () => {
    const { queryByTitle } = render(<CalculatorStore><Button /></CalculatorStore>);
    const btn = queryByTitle("numberButtons");
    expect(btn).toBeTruthy();
});

it("checkButtonRender", () => {
    const { queryByTitle } = render(<CalculatorStore><Equals /></CalculatorStore>);
    const btn = queryByTitle("equalsButton");
    expect(btn).toBeTruthy();
});

it("checkButtonRender", () => {
    const { queryByTitle } = render(<CalculatorStore><Add /></CalculatorStore>);
    const btn = queryByTitle("addButton");
    expect(btn).toBeTruthy();
});

it("checkButtonRender", () => {
    const { queryByTitle } = render(<CalculatorStore><Subtract /></CalculatorStore>);
    const btn = queryByTitle("subtractButton");
    expect(btn).toBeTruthy();
});

it("checkButtonRender", () => {
    const { queryByTitle } = render(<CalculatorStore><Multiply /></CalculatorStore>);
    const btn = queryByTitle("multiplyButton");
    expect(btn).toBeTruthy();
});

it("checkButtonRender", () => {
    const { queryByTitle } = render(<CalculatorStore><Divide /></CalculatorStore>);
    const btn = queryByTitle("divideButton");
    expect(btn).toBeTruthy();
});

it("checkButtonRender", () => {
    const { queryByTitle } = render(<CalculatorStore><ClearButton /></CalculatorStore>);
    const btn = queryByTitle("clearButton");
    expect(btn).toBeTruthy();
});

it("checkDisplayRender", () => {
    const { queryByTitle } = render(<CalculatorStore><Display /></CalculatorStore>);
    const display = queryByTitle("display");
    expect(display).toBeTruthy();
});

