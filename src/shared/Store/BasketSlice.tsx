import { createSlice } from '@reduxjs/toolkit';
import { IproductType } from '../types/types';
import { IbasketAction } from './reduxTypes';

const initialState: IproductType[] = JSON.parse(localStorage.getItem('basket')!)
    ? JSON.parse(localStorage.getItem('basket')!)
    : [];

export const basketSlice = createSlice({
    name: 'Basket',
    initialState,
    reducers: {
        addToBasket: (state: IproductType[], { payload: product }: IbasketAction) => {
            const isExists = state.some((p) => p._id === product._id);
            const index = state.findIndex((item) => item._id === product._id);
            if (isExists) {
                const currentObject = JSON.parse(JSON.stringify(state[index]));
                if (index !== -1) {
                    if (currentObject.quantityСounter !== undefined) {
                        let quantity = currentObject.quantityСounter;
                        state.splice(index, 1, {
                            ...currentObject,
                            quantityСounter: ++quantity,
                        });
                        return localStorage.setItem('basket', JSON.stringify(state));
                    }
                }
            } else state.push({ ...product, quantityСounter: 1 });
            return localStorage.setItem('basket', JSON.stringify(state)); //удалить позхже
        },
        removeFromBasket: (state: IproductType[], { payload: product }: IbasketAction) => {
            const isExists = state.some((p) => p._id === product._id);
            const index = state.findIndex((item) => item._id === product._id);
            if (isExists) {
                const currentObject = JSON.parse(JSON.stringify(state[index]));
                if (index !== -1) {
                    if (currentObject.quantityСounter !== undefined && currentObject.quantityСounter !== 1) {
                        let quantity = currentObject.quantityСounter;
                        state.splice(index, 1, {
                            ...currentObject,
                            quantityСounter: --quantity,
                        });
                        return localStorage.setItem('basket', JSON.stringify(state));
                    } else state.splice(index, 1);
                }
            }
            return localStorage.setItem('basket', JSON.stringify(state));
        },
        clearBasket: (state: IproductType[]) => {
            localStorage.removeItem('basket');
            console.log(JSON.parse(localStorage.getItem('basket')!));
            return (state = []);
        },
    },
});

export const { actions, reducer } = basketSlice;
