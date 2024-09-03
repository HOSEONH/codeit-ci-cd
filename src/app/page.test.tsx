import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

describe("Page", () => {
    it("renders the page", () => {
        const { getByText } = render(<Page />);
        expect(getByText("Get started by editing")).toHaveTextContent("Get started by editing");
    });
});
