import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../Store/reduxTypes';
export const useModals = () => {
    const modals = useSelector.withTypes<RootState>();
    return modals((state) => state.modal);
};
