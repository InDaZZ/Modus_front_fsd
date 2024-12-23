import React from 'react';
import './ProductModal.scss';
import { calcSale } from '../Functions/calcSale';
import { Iprops } from './model/types';
import { IproductType } from '../types/types';

function ProductModal({ product }: Iprops) {
    function calcBfc(product: IproductType) {
        return `${+product.proteins * 4 + +product.fats * 9 + +product.carbohydrates * 4}`;
    }

    return (
        <div className="productmodal">
            <div className="productmodal-content-container"></div>
            <img src={product.image} alt={product.name} className="productmodal__image" />
            <div className="productmodal-content">
                <h3 className="productmodal-title">{product.name}</h3>
                <div className="productmodal-price-container">
                    <p
                        className={`productmodal-price ${
                            product.sale === 0 ? 'productmodal-price_nosale' : ''
                        }`}
                    >
                        {product.cost}₽
                    </p>
                    <p className={`${product.sale === 0 ? 'productmodal-sale_hidden' : 'productmodal-sale'}`}>
                        /{calcSale(product.cost, product.sale)}₽
                    </p>
                </div>
                <p className="productmodal-bfc">Белки: {product.proteins}</p>
                <p className="productmodal-bfc">Жиры: {product.fats}</p>
                <p className="productmodal-bfc"> Углеводы: {product.carbohydrates}</p>
                <p className="productmodal-bfc">ккал: {calcBfc(product)}</p>
                <button className="productmodal__button">+ Добавить</button>
            </div>
        </div>
    );
}

export default ProductModal;
