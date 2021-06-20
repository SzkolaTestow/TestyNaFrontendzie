import React from "react";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import ListElement from "../ListElement";

describe('ListElement', () => {
    const onAddMock = jest.fn();
    const onRemoveMock = jest.fn();

    const product = {
        id: '1',
        name: 't-shirt',
        price: 49.99,
        quantity: 1
    }

    it('should renders with a given name, price and quantity',  () => {
        render(<ListElement product={product} onAdd={onAddMock} onRemove={onRemoveMock}/>);
    })
});
