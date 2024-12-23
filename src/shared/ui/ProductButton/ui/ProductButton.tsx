import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import './ProductButton.scss';

export const ProductButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button className="productbutton" onClick={props.onClick}>
            {props.value}
        </button>
    );
};
