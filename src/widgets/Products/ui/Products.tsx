import React from 'react';
import './Products.scss';
import { Iprops } from '../model/types';
import { Product } from '../../../entities/Product';
import { AddToBasket } from '../../../features/Product';
import { EditProduct } from '../../../features/Product';
import { DeleteProduct } from '../../../features/Product';
import { useLocation } from 'react-router-dom';
import { adminRoutes } from '../model/adminRoutes';
import { StopProductToggle } from '../../../features/StopProduct';
import { IproductType } from '../../../shared/types/types';

export const Products = ({ products }: { products: IproductType[] }) => {
    console.log(products);
    const location = useLocation();
    const adminPath = adminRoutes.includes(location.pathname);
    const stopListRoutes = location.pathname.includes('stoplist');

    function renderProduct(products: IproductType[]) {
        console.log(products);
        return products.map((product) => {
            return (
                <Product
                    key={product._id}
                    image={product.image}
                    name={product.name}
                    cost={product.cost}
                    sale={product.sale}
                    availability={product.availability}
                    product={product}
                    children={
                        stopListRoutes ? (
                            <StopProductToggle product={product}></StopProductToggle>
                        ) : adminPath ? (
                            [
                                <EditProduct product={product}></EditProduct>,
                                <DeleteProduct product={product}></DeleteProduct>,
                            ]
                        ) : (
                            <AddToBasket product={product}></AddToBasket>
                        )
                    }
                ></Product>
            );
        });
    }
    return <section className="products">{renderProduct(products)}</section>;
};
