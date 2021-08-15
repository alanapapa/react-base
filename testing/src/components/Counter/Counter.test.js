import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Counter from './index'

describe('Counter tests', () => {
    let count, increaseBtn, decreaseBtn;
    beforeAll(() => {
        console.log("Выполняется один раз перед остальными")
    })

    beforeEach(() => {
        console.log("Выполняется перед каждым тестом");
        render(<Counter />)
        count = screen.getByText("0")
        increaseBtn = screen.getByText("Increase")
        decreaseBtn = screen.getByText("Decrease")
    })

    afterEach(() => {
        console.log("Выполняется после каждого теста");
    })

    afterAll(() => {
        console.log("Выполняется после всех")
    })

    test('increase btn', () => {
        userEvent.click(increaseBtn)
        expect(count).toHaveTextContent("1");
    })
    
    test('decrease btn', () => {
        userEvent.click(decreaseBtn)
        expect(count).toHaveTextContent("1");
    })
});
