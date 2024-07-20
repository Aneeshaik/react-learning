import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import About from "../components/About"
import { act } from "react";
import mockData from "../mocks/githubMockdata.json"

// global.fetch = jest.fn(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(mockData),
//     })
// );

test("should render", async () => {
    await act(async() => {
        render(<About />)
    })
    const aboutText = screen.getByText("Anees");
    // aboutHead.forEach((head) => {
    //     expect(head).toBeInTheDocument();
    //   });
    // console.log(aboutHead);
    expect(aboutText).toBeInTheDocument()
})