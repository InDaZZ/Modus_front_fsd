import React, { useContext } from 'react';
import { useAction } from '../../../../shared/hooks/useActions';
import { ModalContext } from '../../../../shared/context/context';
import { DeleteModal } from '../../../../shared/DeleteModal/DeleteModal';
import { ProductButton } from '../../../../shared/ui/ProductButton';
import { IproductType } from '../../../../shared/types/types';

export const DeleteProduct = ({ product }: { product: IproductType }) => {
    const modalContext = useContext(ModalContext);
    const { modalsState } = useAction();
    function openModal() {
        modalsState({
            modalMainState: true,
        });
        modalContext?.setModal(<DeleteModal product={product}></DeleteModal>);
    }
    return <ProductButton value={'Удалить'} onClick={openModal} />;
};
