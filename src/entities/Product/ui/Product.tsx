import React, { useContext, useState } from 'react';
import './Product.scss';
import { calcSale } from '../../../shared/Functions/calcSale';
import { useAction } from '../../../shared/hooks/useActions';
import ProductModal from '../../../shared/ProductModal/ProductModal';
import { ModalContext } from '../../../shared/context/context';
import { Iprops } from '../model/types';

export const Product = ({ image, name, cost, sale, availability, product, children }: Iprops) => {
    const modalContext = useContext(ModalContext);
    const { modalsState } = useAction();

    function openModal() {
        modalsState({
            modalMainState: true,
        });
        modalContext?.setModal(<ProductModal product={product}></ProductModal>);
    }

    return (
        <div className={availability === true ? 'product' : 'product product_stop'}>
            <img
                src={image}
                alt="изображение продукта"
                className="product__image"
                onClick={() => {
                    openModal();
                }}
            ></img>
            <div className="product__name">{name}</div>
            <div className="product__cost">
                <span className={sale ? 'product__full-cost_sale' : 'product__full-cost'}>{cost}₽</span>
                <span className={sale ? 'product__sale' : 'product__sale_disabled'}>
                    {calcSale(cost, sale)}₽
                </span>
            </div>
            {children}
        </div>
    );
};
