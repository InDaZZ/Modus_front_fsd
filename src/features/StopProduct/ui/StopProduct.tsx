import React from 'react';
import './StopProduct.scss';
import { ProductButton } from '../../../shared/ui/ProductButton';
import { IproductType } from '../../../shared/types/types';
import { stopProductApi } from '../api/api';

export const StopProductToggle = ({ product }: { product: IproductType }) => {
    const requestType: Record<
        string,
        (
            pathType: 'roll' | 'pizza' | 'hot',
            product: {
                _id: string;
                availability: boolean;
            },
        ) => Promise<IproductType>
    > = {
        roll: stopProductApi.stop,
        pizza: stopProductApi.stop,
        hotStop: stopProductApi.stop,
    };
    const productStopToggle = () => {
        if (product.availability) {
            requestType[product.type](`${product.type as 'roll' | 'pizza' | 'hot'}`, {
                _id: product._id,
                availability: false,
            })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        } else {
            requestType[product.type](`${product.type as 'roll' | 'pizza' | 'hot'}`, {
                _id: product._id,
                availability: true,
            })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }
        window.location.reload();
    };

    return (
        <ProductButton
            value={`${product.availability ? 'В стоплист' : ' Убрать из стоплиста'}`}
            onClick={productStopToggle}
        />
    );
};
