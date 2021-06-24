import React, { useEffect } from "react";
import { render, fireEvent } from "@testing-library/react"
import { operations } from "./Equals"

useEffect(() => {
    console.log(operations)

}, [])
test("addTwo", () => {
    expect(addTwo(4, 4)).toBe(8);
    expect(addTwo(3, 6)).toBe(9);

});