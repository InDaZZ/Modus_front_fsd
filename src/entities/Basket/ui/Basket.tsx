import React from 'react';
import { useBasket } from '../../../shared/hooks/useBasket';
import { useAction } from '../../../shared/hooks/useActions';
import BasketElement from '../../../shared/BasketElement/ui/BasketElement';
import { IproductType } from '../../../shared/types/types';

export const Basket = () => {
    const basket = useBasket();
    const savedBasket: IproductType[] = JSON.parse(localStorage.getItem('basket')!);
    const { clearBasket } = useAction();

    const clickClearBasket = () => {
        clearBasket();
    };

    function renderProduct(products: IproductType[]) {
        if (savedBasket) {
            return savedBasket.map((product) => {
                return <BasketElement product={product}></BasketElement>;
            });
        } else
            products.map((product) => {
                return <BasketElement product={product}></BasketElement>;
            });
        return [];
    }
    return (
        <section className="basket">
            <div className="basket__title">
                <h2>Корзина</h2>
                <button className="basket__button" onClick={clickClearBasket}>
                    Очистить
                </button>
            </div>
            {basket.length !== 0 ? (
                renderProduct(basket)
            ) : (
                <div className="basket__info-container">
                    <p className="basket__info-text">Тут пока пусто</p>
                    <p className="basket__info-emoji"> &#128532; </p>
                </div>
            )}
        </section>
    );
};
export default Basket;
