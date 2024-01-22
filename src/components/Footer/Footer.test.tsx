import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import {Footer} from "./Footer";

describe("Running Test for Footer", () => {

  test("Check Footer", () => {
    render(<Footer text="Footer text"/>)
    expect(screen.getByText("Footer text")).toBeTruthy();
  });
});