import React from 'react';
import './BasketModal.scss';
import BasketElement from '../BasketElement/ui/BasketElement';
import { useBasket } from '../hooks/useBasket';
import { useAction } from '../hooks/useActions';
import { useNavigate } from 'react-router';
import { ModalContext } from '../context/context';
import { useContext } from 'react';
import { ButtonBlack } from '../ui/ButtonBlack/ui/ButtonBlack';
import { IproductType } from '../types/types';

function BasketModal() {
    const navigate = useNavigate();
    const { modalsState } = useAction();
    const modalContext = useContext(ModalContext);
    const basket = useBasket();
    const { clearBasket } = useAction();

    const savedBasket: IproductType[] = JSON.parse(localStorage.getItem('basket')!);
    console.log(savedBasket, 'корзина');
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
    const clearClick = () => {
        clearBasket();
    };
    const closeModal = () => {
        modalsState({
            modalMainState: false,
        });
        modalContext?.setModal(null);
    };
    const basketRedirect = () => {
        navigate('/basket');
        closeModal();
    };

    return (
        <div className="basketmodal">
            <div className="basketmodal__title">
                <h2>Корзина</h2>
                {basket.length !== 0 && (
                    <button className="basketmodal__button-clear" onClick={clearClick}>
                        Очистить
                    </button>
                )}
            </div>
            {basket.length !== 0 ? (
                <div className="basketelement-container">{renderProduct(basket)}</div>
            ) : (
                <div className="basketmodal__info-container">
                    <p className="basketmodal__info-text">Тут пока пусто</p>
                    <p className="basketmodal__info-emoji"> &#128532; </p>
                </div>
            )}
            <ButtonBlack
                type={'button'}
                buttonState={true}
                value={'Все верно. Оформить'}
                onClick={basketRedirect}
                style={{ marginTop: '20px' }}
            ></ButtonBlack>
        </div>
    );
}

export default BasketModal;
