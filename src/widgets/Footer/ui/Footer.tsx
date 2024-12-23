import React from "react";
import "./Footer.scss";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import jobSvg from "../../../shared/images/jobsvg.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact-container">
        <h3 className="footer__contacts" id="footer__contacts">
          Контакты:
        </h3>
        <p className="footer__contact">+799999999</p>
        <p className="footer__contact">modus@mail.ru</p>
      </div>
      <YMaps>
        <Map
          className="map__style"
          defaultState={{
            center: [52.98455854732863, 36.06322403754645],
            zoom: 15,
          }}
        />
      </YMaps>
      <div className="footer__hh-container">
        <h3 className="footer__hh">Мы нанимаем</h3>
        <a href="https://clck.ru/38bC6F" className="footer__hh-link">
          Avito
        </a>
        <img src={jobSvg} className="footer__hh-qrlink" alt="QR-code"></img>
      </div>
    </footer>
  );
};
