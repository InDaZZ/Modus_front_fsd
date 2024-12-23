import { ButtonHTMLAttributes } from 'react';

export interface IbuttonBlackProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonState: boolean;
    type: 'submit' | 'reset' | 'button';
    style: Record<string, string>;
}
