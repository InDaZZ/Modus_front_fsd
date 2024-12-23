import React from 'react';
import './AddModal.scss';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { ButtonBlack } from '../ui/ButtonBlack';
import { addModalApi } from './api/api';
import { IproductType } from '../types/types';

export const AddModal = () => {
    const location = useLocation();
    const { register, getValues, handleSubmit, formState } = useForm({});

    function onSubmit() {
        const newProdcut: IproductType = getValues() as IproductType;
        if (location.pathname === '/adminpagerolls') {
            console.log('i here');
            addModalApi
                .create('roll', newProdcut)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }
        if (location.pathname === '/adminpagepizza') {
            addModalApi
                .create('pizza', newProdcut)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }
        window.location.reload();
    }
    return (
        <form className="addmodal" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="addmodal-heading">Добавить</h1>
            <div className="addmodal__input-container">
                <label htmlFor="name" className="addmodal__field">
                    <p className="addmodal__input-name">Название Товара</p>
                    <input
                        className="addmodal-input"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Название"
                        {...register('name')}
                    ></input>
                </label>
                <label htmlFor="image" className="addmodal__field">
                    <p className="addmodal__input-name">Сылка на изображение</p>
                    <input
                        className="addmodal-input"
                        type="text"
                        name="image"
                        id="image"
                        placeholder="Изображение"
                        {...register('image')}
                    ></input>
                </label>
                <label htmlFor="proteins" className="addmodal__field">
                    <p className="addmodal__input-name">Белки, только цифра</p>
                    <input
                        className="addmodal-input"
                        type="number"
                        name="proteins"
                        id="proteins"
                        placeholder="Белки"
                        {...register('proteins')}
                    ></input>
                </label>
                <label htmlFor="fats" className="addmodal__field">
                    <p className="addmodal__input-name">Жиры, только цифра</p>
                    <input
                        className="addmodal-input"
                        type="number"
                        name="fats"
                        id="fats"
                        placeholder="Жиры"
                        {...register('fats')}
                    ></input>
                </label>
                <label htmlFor="carbohydrates" className="addmodal__field">
                    <p className="addmodal__input-name"> Углеводы, только цифра</p>
                    <input
                        className="addmodal-input"
                        type="number"
                        name="carbohydrates"
                        id="carbohydrates"
                        placeholder="Углеводы"
                        {...register('carbohydrates')}
                    ></input>
                </label>
                <label htmlFor="cost" className="addmodal__field">
                    <p className="addmodal__input-name">Цена,только цифра</p>
                    <input
                        className="addmodal-input"
                        type="number"
                        name="cost"
                        id="cost"
                        placeholder="Цена"
                        {...register('cost')}
                    ></input>
                </label>
                <label htmlFor="sale" className="addmodal__field">
                    <p className="addmodal__input-name">Скидка, только цифра</p>
                    <input
                        className="addmodal-input"
                        type="number"
                        name="sale"
                        id="sale"
                        placeholder="Скидка"
                        {...register('sale')}
                    ></input>
                </label>
            </div>
            <ButtonBlack
                type={'submit'}
                buttonState={formState.isValid}
                value={'Добавить'}
                style={{ margin: '20px auto' }}
            />
        </form>
    );
};
