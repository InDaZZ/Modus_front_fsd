import React, { useContext } from 'react';
import { ModalContext } from '../../../../shared/context/context';
import { useAction } from '../../../../shared/hooks/useActions';
import { EditModal } from '../../../../shared/EditModal/EditModal';
import { ProductButton } from '../../../../shared/ui/ProductButton';
import { IproductType } from '../../../../shared/types/types';

export const EditProduct = ({ product }: { product: IproductType }) => {
    console.log('asdasdasd');
    const { modalsState } = useAction();
    const modalContext = useContext(ModalContext);

    function openModal() {
        modalsState({
            modalMainState: true,
        });
        modalContext?.setModal(<EditModal product={product}></EditModal>);
    }
    return <ProductButton value={'Редактировать'} onClick={openModal} />;
};
