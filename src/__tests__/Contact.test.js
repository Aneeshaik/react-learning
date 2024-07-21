import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Contact from "../components/Contact"

// can render group of tests in describe
describe("test to render contact component", () => {
    // beforeAll(() => {
    //     console.log("Before All");
    // })
    // beforeEach(() => {
    //     console.log("Before Each");
    // })
    // afterAll(() => {
    //     console.log("After All");
    // })
    // afterEach(() => {
    //     console.log("After Each");
    // })
    it("should render contact component", () => {
        render(<Contact/>);
        const contHead = screen.getByRole("heading", {name : "Contact"})
        expect(contHead).toBeInTheDocument();
    })
})