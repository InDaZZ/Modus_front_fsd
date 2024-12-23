import { createSlice } from '@reduxjs/toolkit';
import { IproductType } from '../../types/types';

const initialState: IproductType[] = [];

export const hotSlice = createSlice({
    name: 'Hot',
    initialState,
    reducers: {
        addHot: (state, { payload: hot }) => {
            if (state.length === 0) {
                state.push(...hot);
            }
            return;
        },
    },
});

export const { actions, reducer } = hotSlice;
