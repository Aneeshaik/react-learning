import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import About from "../components/About"
test("should render", () => {
    render(<About />)
    const aboutText = screen.getByText("Anees");
    // aboutHead.forEach((head) => {
    //     expect(head).toBeInTheDocument();
    //   });
    // console.log(aboutHead);
    expect(aboutText).toBeInTheDocument()
})