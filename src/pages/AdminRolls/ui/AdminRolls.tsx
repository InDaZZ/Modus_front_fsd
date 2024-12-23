import React from 'react';
import './AdminRolls.scss';
import { Header } from '../../../widgets/Header/ui/Header';
import { Products } from '../../../widgets/Products';
import { useAllRoll } from '../../../shared/hooks/useAllRoll';
import { useAction } from '../../../shared/hooks/useActions';
import { RollsApi } from '../api/api';
import { useEffect, useLayoutEffect, useState } from 'react';
import { AddNewProduct } from '../../../features/AddNewProduct';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { IproductType } from '../../../shared/types/types';

export const AdminRolls = () => {
    const rolls = useAllRoll();
    const location = useLocation();
    const navigate = useNavigate();
    const ProductsArray = useAllRoll();
    const stopElementIndex = useRef(0);
    const [isStopList, setStopList] = useState<boolean>(false);
    const { addRolls } = useAction();
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
    useLayoutEffect(() => {
        location.pathname.includes('stoplist') && setStopList(true);
    }, []);
    useEffect(() => {
        if (rolls.length > 0) {
            return;
        } else {
            getAllRolls();
        }
    }, []);

    function getAllRolls() {
        RollsApi.getRolls()
            .then((rolls) => {
                addRolls(rolls);
                localStorage.setItem('rolls', JSON.stringify(rolls));
            })
            .catch((err) => console.log(err));
    }

    function stopListToggle() {
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
