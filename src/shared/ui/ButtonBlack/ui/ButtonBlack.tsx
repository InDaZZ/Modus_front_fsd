import React from 'react';
import './ButtonBlack.scss';
import { IbuttonBlackProps } from '../model/types';
/* interface IbuttonBlackProps {
  buttonState: boolean;
  type: "submit" | "reset" | "button";
  text: string;
  style: Record<string, string>;
  onClick?: () => void;
} */

export const ButtonBlack: React.FC<IbuttonBlackProps> = (props) => {
    return (
        <button
            {...props}
            className={props.buttonState ? `buttonblack` : `buttonblack buttonblack_inactive`}
            style={props.style}
            onClick={props.onClick}
            disabled={props.buttonState ? false : true}
        >
            {props.value}
        </button>
    );
};
