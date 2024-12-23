import React from 'react';
import { store } from '../../shared/Store/Store';
import { Provider } from 'react-redux';
import ModalContextProvider from '../../shared/context/context';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <ModalContextProvider>{children}</ModalContextProvider>
        </Provider>
    );
};
