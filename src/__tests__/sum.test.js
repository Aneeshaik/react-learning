import { render } from "@testing-library/react";
import { sum } from "../components/sum";
import About from "../components/About"
import '@testing-library/jest-dom'
test("A function to test sum file", () => {
    const result = sum(2,8);
    expect(result).toBe(10)
})

// test("should render", () => {
//     render(<About />)
//     const aboutHead = screen.getByRole("heading");
//     expect(aboutHead).toBeInTheDocument()
// })