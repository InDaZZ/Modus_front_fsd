import React from 'react';
import './Categories.scss';
import Category from '../../../entities/Category/ui/Category';
import { Header } from '../../../widgets/Header/ui/Header';
import { Footer } from '../../../widgets/Footer';
export const Categories = () => {
    return (
        <>
            <Header></Header>
            <main className="сategories">
                <Category
                    categotyTitle={'Роллы'}
                    categoryImage={
                        'https://eda.yandex/images/1370147/e458659056d92f615f19b2a220dc14a2-450x300.jpeg'
                    }
                    categoryImageAlt={'Изображение категории - Роллы'}
                    cost={'299'}
                    time={'40'}
                    linkTo={'/rolls'}
                ></Category>

                <Category
                    categotyTitle={'Пицца'}
                    linkTo={'/pizza'}
                    categoryImage={
                        'https://eda.yandex/images/1447609/ecc35f96851d4c5299eb3af8bf62cbb8-400x400.jpeg'
                    }
                    categoryImageAlt={'Изображение категории - Пицца'}
                    cost={'399'}
                    time={'40'}
                ></Category>

                <Category
                    categotyTitle={'Горячие блюда'}
                    linkTo={'/hot'}
                    categoryImage={
                        'https://eda.yandex/images/3502490/763588aa8e6f48059c913b3b30f71a94-450x300.jpeg'
                    }
                    categoryImageAlt={'Изображение категории - Горячие блюда'}
                    cost={'300'}
                    time={'40'}
                ></Category>
            </main>
            <Footer></Footer>
        </>
    );
};
