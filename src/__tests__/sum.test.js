import { sum } from "../components/sum";
test("A function to test sum file", () => {
    const result = sum(2,8);
    expect(result).toBe(10)
})