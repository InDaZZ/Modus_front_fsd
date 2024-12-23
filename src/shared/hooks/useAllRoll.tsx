import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../Store/reduxTypes';
export const useAllRoll = () => {
    const allRollData = useSelector.withTypes<RootState>();
    return allRollData((state) => state.allRolls);
};
