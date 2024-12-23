import React from 'react';
import './Pizza.scss';
import { Products } from '../../../widgets/Products';
import { useLayoutEffect } from 'react';
import { useAllPizzas } from '../../../shared/hooks/useAllPizzas';
import { useAction } from '../../../shared/hooks/useActions';
import { Header } from '../../../widgets/Header/ui/Header';
import { Footer } from '../../../widgets/Footer';
import { PizzaApi } from '../api/api';

export const Pizza = () => {
    const { addPizzas } = useAction();

    useLayoutEffect(() => {
        getAllPizza();
    }, []);

    const getAllPizza = () => {
        PizzaApi.getPizza()
            .then((pizza) => {
                addPizzas(pizza);
                localStorage.setItem('pizzas', JSON.stringify(pizza));
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Header></Header>
            <section className="pizza">
                <Products products={useAllPizzas()}></Products>
            </section>
            <Footer></Footer>
        </>
    );
};
