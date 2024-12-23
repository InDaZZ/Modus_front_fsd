import { bindActionCreators, CaseReducerActions } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as allRolls } from '../Store/Products/rollSlice';
import { actions as allPizzas } from '../Store/Products/pizzaSlice';
import { actions as allHot } from '../Store/Products/hotSlice';
import { actions as basket } from '../Store/BasketSlice';
import { actions as modalsState } from '../Store/Popups/ModalToggle';
import { AppDispatch } from '../Store/reduxTypes';

const rootActions = {
    ...allRolls,
    ...allPizzas,
    ...allHot,
    ...basket,
    ...modalsState,
};

export const useAction = () => {
    const dispatch = useDispatch.withTypes<AppDispatch>();

    return bindActionCreators(rootActions, dispatch());
};
