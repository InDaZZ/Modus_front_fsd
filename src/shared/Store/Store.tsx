import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as rollReducer } from './Products/rollSlice';
import { reducer as hotReducer } from './Products/hotSlice';
import { reducer as pizzaReducer } from './Products/pizzaSlice';
import { reducer as basketReducer } from './BasketSlice';
import { reducer as ModalReducer } from './Popups/ModalToggle';
import { rApi } from './api-old/rtkApi.js';

const reducers = combineReducers({
    allRolls: rollReducer,
    allPizzas: pizzaReducer,
    allHot: hotReducer,
    basket: basketReducer,
    modal: ModalReducer,
    [rApi.reducerPath]: rApi.reducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rApi.middleware),
});
