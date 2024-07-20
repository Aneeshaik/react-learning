import { render, screen } from "@testing-library/react"
import Mock_Data from "../mocks/cardMockdata.json"
import Card from "../components/Card"
import "@testing-library/jest-dom"

test("should render card component", () => {
    render(<Card resData = {Mock_Data} />)
    const cardHead = screen.getByText("PS4 Veg Restaurant (Perambur Sri Srinivasa)");
    expect(cardHead).toBeInTheDocument();
})