import React from 'react';
import './CreateOrder.scss';
import { ButtonBlack } from '../../../shared/ui/ButtonBlack/ui/ButtonBlack';
import { FormState } from 'react-hook-form';

export const CreateOrder = ({
    formState,
}: {
    formState: FormState<{
        number: string;
    }>;
}) => {
    console.log(formState.isValid);
    return (
        <>
            <ButtonBlack
                type={'submit'}
                buttonState={formState.isValid}
                value={'Оформить заказ'}
                style={{ margin: '20px auto 0' }}
            />
        </>
    );
};
