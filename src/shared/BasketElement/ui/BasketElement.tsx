import React from 'react';
import './basketelement.scss';
import { useAction } from '../../hooks/useActions';
import { calcSale } from '../../Functions/calcSale';

import { IproductType } from '../../types/types';

function BasketElement({ product }: { product: IproductType }) {
    const { addToBasket } = useAction();
    const { removeFromBasket } = useAction();

    const quantityCounterPlus = () => {
        addToBasket(product);
    };

    const quantityCounterMinus = () => {
        removeFromBasket(product);
    };

    return (
        <div className="basketelement">
            <div>
                <img src={product.image} alt={product.name} className="basketelement__image"></img>
            </div>
            <div className="basketelement__name-container">
                <p className="basketelement__name">{product.name}</p>
                <div className="basketelement__info-container">
                    <p className="basketelement__info">
                        {product.sale ? calcSale(product.cost, product.sale) : product.cost}/
                    </p>
                    <p className="basketelement__info">275 г</p>
                </div>
            </div>
            <div className="basketelement__buttons-container">
                <button className="basketelement__button" onClick={quantityCounterMinus}>
                    &#8722;
                </button>
                <span>{product.quantityСounter}</span>
                <button className="basketelement__button" onClick={quantityCounterPlus}>
                    &#43;
                </button>
            </div>
        </div>
    );
}

export default BasketElement;
