import React from 'react';
import { useAction } from '../../../shared/hooks/useActions';
import './AddToBasket.scss';
import { ProductButton } from '../../../shared/ui/ProductButton';
import { IproductType } from '../../../shared/types/types';

export const AddToBasket = ({ product }: { product: IproductType }) => {
    const { addToBasket } = useAction();
    const toBasket = () => {
        addToBasket(product);
    };
    return <ProductButton value={'+ Добавить'} onClick={toBasket}></ProductButton>;
};
