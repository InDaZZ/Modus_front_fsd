import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../Store/reduxTypes';
export const useAllHot = () => {
    const allHotData = useSelector.withTypes<RootState>();
    return allHotData((state) => state.allHot);
};
