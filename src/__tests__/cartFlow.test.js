import { fireEvent, render, screen } from "@testing-library/react"
import RestuarantMenu from "../components/RestuarantMenu"
import Header from "../components/Header"
import mockData from "../mocks/menuMockdata.json";
import { act } from "react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom"

import appStore from "../components/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(mockData)
    })
)

it("should render restuarant menu heading", async() => {
    await act(async() => {
        render(
        <Provider store={appStore}>
            <RestuarantMenu />;
        </Provider>
        )
    })
    const accordionHead = screen.getByText("Breakfast Veg (40)");
    expect(accordionHead).toBeInTheDocument();
})

it("should render add button", async() => {
    await act(async() => {
        render(
        <Provider store={appStore}>
            <RestuarantMenu />;
        </Provider>
        )
    })
    const addBtn = screen.getAllByRole("button", {name : "Add+"})
    addBtn.forEach(btn => {
        expect(btn).toBeInTheDocument();
    });
})

it("should render cart in header", async() => {
    await act(async() => {
        render(
        <Provider store={appStore}>
        <BrowserRouter>
            <RestuarantMenu />;
            <Header />
            </BrowserRouter>
        </Provider>
        )
    })
    const addBtn = screen.getAllByRole("button", {name : "Add+"})
    addBtn.forEach(btn => {
        expect(btn).toBeInTheDocument();
    });
    fireEvent.click(addBtn[0]);
    const cartNum = screen.getByText("Cart - 1 items");
    expect(cartNum).toBeInTheDocument();
})