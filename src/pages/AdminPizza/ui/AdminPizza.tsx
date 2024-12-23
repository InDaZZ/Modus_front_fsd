import React from 'react';
import './AdminPizza.scss';
import { Header } from '../../../widgets/Header/ui/Header';
import { Products } from '../../../widgets/Products';
import { useAllPizzas } from '../../../shared/hooks/useAllPizzas';
import { useAction } from '../../../shared/hooks/useActions';
import { PizzaApi } from '../api/api';
import { useEffect, useLayoutEffect, useState } from 'react';
import { AddNewProduct } from '../../../features/AddNewProduct';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { IproductType } from '../../../shared/types/types';

export const AdminPizza = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const ProductsArray = useAllPizzas();
    const stopElementIndex = useRef(0);
    const stopListArray = ProductsArray.reduce((resultArr: IproductType[], product: IproductType) => {
        stopElementIndex.current = 0;
        if (product.availability === true) {
            resultArr.push(product);
        } else {
            resultArr.splice(stopElementIndex.current, 0, product);
            stopElementIndex.current++;
        }
        return resultArr;
    }, []);
    const [isStopList, setStopList] = useState(false);
    const pizza = useAllPizzas();
    const { addPizzas } = useAction();

    useLayoutEffect(() => {
        location.pathname.includes('stoplist') && setStopList(true);
    }, []);
    useEffect(() => {
        if (pizza.length > 0) {
            return;
        } else {
            getAllPizza();
        }
    }, []);

    function getAllPizza() {
        PizzaApi.getPizza()
            .then((pizza) => {
                addPizzas(pizza);
                localStorage.setItem('rolls', JSON.stringify(pizza));
            })
            .catch((err) => console.log(err));
    }

    function stopListToggle() {
        console.log(location.pathname);
        setStopList((prev) => !prev);
        location.pathname.includes('stoplist')
            ? navigate(location.pathname.replace('/stoplist', ''))
            : navigate('stoplist');
    }
    return (
        <>
            <Header></Header>
            <section className="adminrolls">
                <NavLink className={'adminrolls__button'} to={'/adminpage'}>
                    Назад к категориям
                </NavLink>
                <AddNewProduct />
                <button
                    className="adminrolls__button"
                    onClick={() => {
                        stopListToggle();
                    }}
                >
                    {isStopList ? 'Назад к Редкатировнию' : 'Стоп Лист'}
                </button>
                {isStopList ? (
                    <Products products={stopListArray}></Products>
                ) : (
                    <Products products={ProductsArray}></Products>
                )}
            </section>
        </>
    );
};
