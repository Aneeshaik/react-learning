import { render, screen } from "@testing-library/react"
import Cart from "../components/Cart"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../components/appStore"

it("should render cart component", () => {
    render(
        <Provider store={appStore}>
            <Cart />
        </Provider>
    )
    const cartHead = screen.getByText("Cart");
    expect(cartHead).toBeInTheDocument();
})