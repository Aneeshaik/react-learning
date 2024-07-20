import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../components/Body";
import "@testing-library/jest-dom";
import mockData from "../mocks/restMockdata.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
);

it("should render search button", async () => {
    await act(async() => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })
    const searchBtn = screen.getByRole("button", {name : "Search"})
    expect(searchBtn).toBeInTheDocument()
})

it("should render search input", async () => {
    await act(async() => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })
    const inputBox = screen.getByTestId("searchInput")
    expect(inputBox).toBeInTheDocument()
})

it("should render search button", async () => {
    await act(async() => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })
    const restCards = screen.getAllByTestId("rests");
    expect(restCards.length).toBe(8);
})

it("should show two cards when type table", async () => {
    await act(async() => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })
    const searchBtn = screen.getByRole("button", {name : "Search"})
    const inputBox = screen.getByTestId("searchInput")
    fireEvent.change(inputBox, { target: { value: "table" } });
    fireEvent.click(searchBtn)
    const restCards = screen.getAllByTestId("rests");
    // console.log(restCards);
    expect(restCards.length).toBe(1);
})