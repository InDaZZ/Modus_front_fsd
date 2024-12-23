import { createSlice } from '@reduxjs/toolkit';
import { IproductType } from '../../types/types';
const initialState: IproductType[] = [];

export const pizzaSlice = createSlice({
    name: 'Pizzas',
    initialState,
    reducers: {
        addPizzas: (state, { payload: pizza }) => {
            if (state.length === 0) {
                state.push(...pizza);
            }
            return;
        },
    },
});

export const { actions, reducer } = pizzaSlice;
