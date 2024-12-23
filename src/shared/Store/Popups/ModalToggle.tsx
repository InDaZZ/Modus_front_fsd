import { createSlice } from '@reduxjs/toolkit';
import { ImodalState } from '../reduxTypes';
import { ImodalAction } from '../reduxTypes';

const initialState: ImodalState = {
    modalMainState: false,
};

export const popupHanlde = createSlice({
    name: 'popupHanlde',
    initialState,
    reducers: {
        modalsState: (state: ImodalState, { payload: modalStates }: ImodalAction) => {
            console.log(modalStates);
            return (state = { ...state, ...modalStates });
        },
    },
});

export const { actions, reducer } = popupHanlde;
