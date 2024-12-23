import React from 'react';
import { useForm } from 'react-hook-form';
import './EditModal.scss';
import { ButtonBlack } from '../ui/ButtonBlack/ui/ButtonBlack';
import { editModalApi } from './api/api';
import { IproductType } from '../types/types';

export const EditModal = ({ product }: { product: IproductType }) => {
    const { register, handleSubmit, getValues, formState } = useForm({
        mode: 'onChange',
        defaultValues: {
            name: product.name,
            image: product.image,
            proteins: product.proteins,
            fats: product.fats,
            carbohydrates: product.carbohydrates,
            cost: product.cost,
            sale: product.sale,
        },
    });
    const submitType: Record<
        string,
        (pathType: 'roll' | 'pizza' | 'hot', product: IproductType) => Promise<IproductType>
    > = {
        roll: editModalApi.edit,
        hot: editModalApi.edit,
        pizza: editModalApi.edit,
    };
    function onSubmit() {
        submitType[product.type](
            `${product.type}` as 'roll' | 'pizza' | 'hot',
            {
                ...getValues(),
                _id: product._id,
            } as IproductType,
        )
            .then((res) => {
                console.log(res);
                window.location.reload();
            })
            .catch((err) => console.log(err));
    }
    return (
        <form className="editmodal" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="editmodal-heading">Редактирование</h1>
            <img src={product.image} className="editmodal__image" alt=""></img>
            <div className="editmodal__input-container">
                <label htmlFor="name" className="editmodal__field">
                    <p className="editmodal__input-name">Название Товара</p>
                    <input
                        className="editmodal-input"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Название"
                        {...register('name')}
                    ></input>
                </label>
                <label htmlFor="image" className="editmodal__field">
                    <p className="editmodal__input-name">Сылка на изображение</p>
                    <input
                        className="editmodal-input"
                        type="text"
                        name="image"
                        id="image"
                        placeholder="Изображение"
                        {...register('image')}
                    ></input>
                </label>
                <label htmlFor="proteins" className="editmodal__field">
                    <p className="editmodal__input-name">Белки, только цифра</p>
                    <input
                        className="editmodal-input"
                        type="number"
                        name="proteins"
                        id="proteins"
                        placeholder="Белки"
                        {...register('proteins')}
                    ></input>
                </label>
                <label htmlFor="fats" className="editmodal__field">
                    <p className="editmodal__input-name">Жиры, только цифра</p>
                    <input
                        className="editmodal-input"
                        type="number"
                        name="fats"
                        id="fats"
                        placeholder="Жиры"
                        {...register('fats')}
                    ></input>
                </label>
                <label htmlFor="carbohydrates" className="editmodal__field">
                    <p className="editmodal__input-name"> Углеводы, только цифра</p>
                    <input
                        className="editmodal-input"
                        type="number"
                        name="carbohydrates"
                        id="carbohydrates"
                        placeholder="Углеводы"
                        {...register('carbohydrates')}
                    ></input>
                </label>
                <label htmlFor="cost" className="editmodal__field">
                    <p className="editmodal__input-name">Цена,только цифра</p>
                    <input
                        className="editmodal-input"
                        type="number"
                        name="cost"
                        id="cost"
                        placeholder="Цена"
                        {...register('cost')}
                    ></input>
                </label>
                <label htmlFor="sale" className="editmodal__field">
                    <p className="editmodal__input-name">Скидка, только цифра</p>
                    <input
                        className="editmodal-input"
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
                value={'Изменить'}
                style={{ marginTop: '20px' }}
            ></ButtonBlack>
        </form>
    );
};
