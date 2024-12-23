import React from 'react';
import './Rolls.scss';
import { Products } from '../../../widgets/Products';
import { useLayoutEffect } from 'react';
import { useAllRoll } from '../../../shared/hooks/useAllRoll';
import { useAction } from '../../../shared/hooks/useActions';
import { Header } from '../../../widgets/Header/ui/Header';
import { Footer } from '../../../widgets/Footer';
import { RollsApi } from '../api/api';

export const Rolls = () => {
    const { addRolls } = useAction();

    useLayoutEffect(() => {
        getAllRolls();
    }, []);

    function getAllRolls() {
        RollsApi.getRolls()
            .then((rolls) => {
                console.log(rolls);
                addRolls(rolls);
                localStorage.setItem('rolls', JSON.stringify(rolls));
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Header></Header>
            <section className="rolls">
                <Products products={useAllRoll()}></Products>
            </section>
            <Footer></Footer>
        </>
    );
};
