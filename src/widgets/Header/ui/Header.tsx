import logoWhite from "../../../shared/images/logoWhite.jpg";
import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useBasket } from "../../../shared/hooks/useBasket";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { calckBasketSum } from "../../../shared/Functions/calckBasketSum";
import { ModalContext } from "../../../shared/context/context";
import { useAction } from "../../../shared/hooks/useActions";
import BasketModal from "../../../shared/BasketModal/BasketModal";
import AnimatedCounter from "../../../shared/Animations/AnimatedCouner/AnimatedCouner";

export const Header = () => {
  const basket = useBasket();
  const modalContext = useContext(ModalContext);
  const navigate = useNavigate();
  const { modalsState } = useAction();
  const sumBasketRef = useRef(calckBasketSum(basket));

  useLayoutEffect(() => {
    sumBasketRef.current = calckBasketSum(basket);
  }, [basket]);

  function openBasketPopup() {
    modalsState({
      modalMainState: true,
    });
    modalContext?.setModal(<BasketModal></BasketModal>);
  }

  return (
    <>
      <header className="header">
        <img
          src={logoWhite}
          className="header__logo"
          alt="Логотип"
          onClick={() => navigate("/")}
        ></img>
        <nav className="header__navigation">
          <a href="#footer__contacts" className="header__navigation-element">
            Контакты
          </a>
          <Link className="header__navigation-element" to={"/"}>
            На Главную
          </Link>
          <Link className="header__navigation-element" to={"/"}>
            О нас
          </Link>
        </nav>
        <h1 className="header__title">Ресторан для всей семьи</h1>
      </header>
      <div className="header__basket-button-container">
        <button className="header__basket-button" onClick={openBasketPopup}>
          <span className="header__basket-image"></span>
          <span className="header__basket-sum">
            {
              <AnimatedCounter
                from={sumBasketRef.current}
                to={calckBasketSum(basket)}
              ></AnimatedCounter>
            }
          </span>
        </button>
      </div>
    </>
  );
};
