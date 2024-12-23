import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../Store/reduxTypes';
export const useAllPizzas = () => {
    const allPizzasData = useSelector.withTypes<RootState>();
    return allPizzasData((state) => state.allPizzas);
};
