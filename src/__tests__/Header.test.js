import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../components/Header"
import "@testing-library/jest-dom"
import UserContext from "../utils/UserContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../components/appStore";

it("should render header", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
        </BrowserRouter>
      );
    const logIn = screen.getByRole("button", {name: "LogIn"})
    expect(logIn).toBeInTheDocument();
    fireEvent.click(logIn);
    const logOut = screen.getByRole("button", {name: "LogOut"})
    expect(logOut).toBeInTheDocument();
})