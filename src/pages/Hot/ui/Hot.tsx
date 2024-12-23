import React from 'react';
import { Products } from '../../../widgets/Products';
import { useLayoutEffect } from 'react';
import { useAllHot } from '../../../shared/hooks/useHot';
import { useAction } from '../../../shared/hooks/useActions';
import { Header } from '../../../widgets/Header/ui/Header';
import { Footer } from '../../../widgets/Footer';
import { HotApi } from '../api/api';

export const Hot = () => {
    const { addHot } = useAction();

    useLayoutEffect(() => {
        getAllHot();
    }, []);

    function getAllHot() {
        HotApi.getHot()
            .then((hot) => {
                addHot(hot);
                localStorage.setItem('hot', JSON.stringify(hot));
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Header></Header>
            <section className="hot">
                <Products products={useAllHot()}></Products>
            </section>
            <Footer></Footer>
        </>
    );
};
