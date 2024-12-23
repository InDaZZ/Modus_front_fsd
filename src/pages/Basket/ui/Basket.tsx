import React from 'react';
import './Basket.scss';
import BasketElement from '../../../shared/BasketElement/ui/BasketElement';
import { useBasket } from '../../../shared/hooks/useBasket';
import { useAction } from '../../../shared/hooks/useActions';
import { CreateOrderForm } from '../../../entities/CreateOrderForm';
import { useState } from 'react';
import { calckBasketSum } from '../../../shared/Functions/calckBasketSum';
import { IproductType } from '../../../shared/types/types';

export const Basket = () => {
    const basket = useBasket();
    const { clearBasket } = useAction();
    const savedBasket: IproductType[] = JSON.parse(localStorage.getItem('basket')!);
    const [orderAccepted, setOrderAccepted] = useState<boolean>(false);
    const clearBasketClick = () => {
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
        <section className="basketpage">
            {orderAccepted ? (
                <div className="basketpage__orderAccepted">
                    <h1 className="basketpage__orderAccepted-title">Спасибо за заказ</h1>
                    <p className="basketpage__orderAccepted-message">
                        в ближайшее время мы свяжемся с вами для точнения деталей
                    </p>
                </div>
            ) : (
                <>
                    <div className="basketpage__basket">
                        <div className="basketpage__title-container">
                            <h2>Корзина</h2>
                            {basket.length !== 0 && (
                                <button className="basketpage__button-clear" onClick={clearBasketClick}>
                                    Очистить
                                </button>
                            )}
                        </div>
                        {basket.length !== 0 ? (
                            <div className="basketelements-container">{renderProduct(basket)}</div>
                        ) : (
                            <div className="basketmodal__info-container">
                                <p className="basketmodal__info-text">Тут пока пусто</p>
                                <p className="basketmodal__info-emoji"> &#128532; </p>
                            </div>
                        )}
                    </div>
                    <CreateOrderForm
                        basket={basket}
                        sumBasket={calckBasketSum}
                        setOrderAccepted={setOrderAccepted}
                    ></CreateOrderForm>
                </>
            )}
        </section>
    );
};
