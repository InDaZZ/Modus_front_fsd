import React from 'react';
import './AddNewProduct.scss';
import { ModalContext } from '../../../shared/context/context';
import { useContext } from 'react';
import { useAction } from '../../../shared/hooks/useActions';
import { AddModal } from '../../../shared/AddModal/AddModal';

export const AddNewProduct = () => {
    const modalContext = useContext(ModalContext);
    const { modalsState } = useAction();
    const openModal = () => {
        modalsState({
            modalMainState: true,
        });
        modalContext!.setModal(<AddModal />);
    };
    return (
        <button className="addproduct__button" onClick={openModal}>
            Добавить
        </button>
    );
};
