import React from 'react';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

describe("Home", () => {
    it("renders the page", () => {
        const { getByText } = render(<Home />);
        expect(getByText("Get started by editing")).toHaveTextContent("Get started by editing");
    });
});
