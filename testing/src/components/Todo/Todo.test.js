import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Todo from './index'

describe('Todo tests', () => {
    let button, input;

    beforeEach(() => {
        render(<Todo/>)
        button = screen.getByText("Add")
        input = screen.getByLabelText("Text")
    })

    test('по-умолчанию должны быть 2 задачи', () => {
        const items = screen.getAllByText(/Item/i)
        expect(items.length).toEqual(2)
    })

    test('должны иметь input и button', () => {
        expect(button).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })

    test('должна появиться новая задача при вводе текса в input и нажатии на button', () => {
        // ввод данных в input
        const newItem = "Done?"
        userEvent.type(input, newItem)
        
        // нажатие на button
        userEvent.click(button)

        // assertion - подтверждение
        expect(screen.getByText(newItem)).toBeInTheDocument
    })
});
