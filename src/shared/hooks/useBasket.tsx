import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../Store/reduxTypes';
export const useBasket = () => {
    const basketData = useSelector.withTypes<RootState>();
    return basketData((state) => state.basket);
};
