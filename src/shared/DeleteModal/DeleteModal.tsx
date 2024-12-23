import React from 'react';
import './DeleteModal.scss';
import { useAction } from '../hooks/useActions';
import { ButtonBlack } from '../ui/ButtonBlack/ui/ButtonBlack';
import { deleteModalApi } from './api/api';
import { IproductType } from '../types/types';

export const DeleteModal = ({ product }: { product: IproductType }) => {
    console.log(product);
    const { modalsState } = useAction();
    const deleteTСolbacks: Record<string, Promise<unknown>> = {
        roll: deleteModalApi.delete('roll', product),
        pizza: deleteModalApi.delete('pizza', product),
        hot: deleteModalApi.delete('hot', product),
    };
    function deleteProduct() {
        deleteTСolbacks[product.type].then((res) => console.log(res)).catch((err) => console.log(err));
        window.location.reload();
    }
    function deleteReject() {
        modalsState({
            modalMainState: false,
        });
    }
    return (
        <div className="deletemodal">
            <p className="deletemodal__title">Подтвердите удаление или закройте окно</p>
            <p className="deletemodal__info">Удалить?</p>
            <div className="deletemodal__product-container">
                <img className="deletemodal__product-image" alt="" src={product.image}></img>
                <p className="deletemodal__product-name">{product.name}</p>
            </div>
            <div className="deletemodal__button-container">
                <ButtonBlack
                    style={{ width: '40%' }}
                    buttonState={true}
                    type={'button'}
                    onClick={deleteProduct}
                    value={'Да'}
                ></ButtonBlack>
                <ButtonBlack
                    style={{ width: '40%' }}
                    buttonState={true}
                    type={'button'}
                    onClick={deleteReject}
                    value={'Нет'}
                ></ButtonBlack>
            </div>
        </div>
    );
};
