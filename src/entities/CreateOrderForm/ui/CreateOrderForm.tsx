import React from 'react';
import './CreateOrderForm.scss';
import { useForm } from 'react-hook-form';
import { validatePhone } from '../model/PhoneValidate';
import { anonimOrderApi } from '../api/api';
import { CreateOrder } from '../../../features/CreateOrderForm';
import { calcSale } from '../../../shared/Functions/calcSale';
import { Iprops, IclientData } from '../model/types';
import { Iform } from '../model/types';

export const CreateOrderForm = ({ basket, sumBasket, setOrderAccepted }: Iprops) => {
    const { register, handleSubmit, formState, setValue, getValues } = useForm<Iform>({
        mode: 'onChange',
        defaultValues: {
            number: '+7',
        },
    });
    formState.errors as string;

    const nameErr = formState.errors['clientName']?.message;
    const streetErr: string = formState.errors['clientStreet']?.message;
    const numberErr: string | undefined = formState.errors['number']?.message;
    const onSubmit = () => {
        let deliveryDetails = getValues();
        const productsInBasket: string[] = [];
        basket.forEach((element) => {
            productsInBasket.push(
                `${element.name}, ${element.quantityСounter}шт, Сумма ${
                    calcSale(element.cost, element.sale) * element.quantityСounter
                } P`,
            );
        });
        anonimOrderApi
            .createOrder({
                products: productsInBasket,
                owner: localStorage.getItem('token')!,
                clientData: deliveryDetails as IclientData,
            })
            .then((res) => {
                console.log(res);
                setOrderAccepted(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <form className="createorederform" onSubmit={handleSubmit(onSubmit)}>
            <span className="createorederform__total-price-container">
                <span className="createorederform__total-price-text">Cумма:</span>
                <span className="createorederform__total-price">{sumBasket(basket)}р</span>
            </span>
            <div className="createorederform__input-importance">
                <span className="createorederform__required">Обязательно</span>
                <span className="createorederform__not-required">Не Обязательно</span>
            </div>
            <label className="createorederform__label">
                <input
                    className={`createorederform__input createorederform__input_required ${
                        nameErr && 'createorederform__input_invalid'
                    }`}
                    type="text"
                    name="clientName"
                    placeholder="Имя"
                    {...register('clientName', {
                        required: 'Пожалуйста, введите ваше имя',
                    })}
                ></input>
                {nameErr && <p className="createorederform__imput-errmesage">{nameErr}</p>}
            </label>
            <label className="createorederform__label">
                <input
                    className={`createorederform__input createorederform__input_required ${
                        streetErr && 'createorederform__input_invalid'
                    }`}
                    type="text"
                    name="clientStreet"
                    placeholder="Улица"
                    {...register('clientStreet', {
                        required: 'Пожалуйста, введите адрес',
                    })}
                ></input>
                {streetErr && <p className="createorederform__imput-errmesage">{streetErr}</p>}
            </label>
            <label className="createorederform__label">
                <input
                    className="createorederform__input"
                    type="text"
                    name="clientBuilding"
                    placeholder="№Дома"
                    {...register('clientBuilding')}
                ></input>
            </label>
            <label className="createorederform__label">
                <input
                    className="createorederform__input"
                    type="text"
                    name="clientApartments"
                    placeholder="Квартира/Этаж"
                    {...register('clientApartments')}
                ></input>
            </label>
            <textarea
                className="createorederform__input createorederform__input_comment"
                name="clientComments"
                placeholder="Комментарий к заказу"
                autoComplete="off"
                rows={5}
                {...register('clientComments')}
            ></textarea>
            <label className="createorederform__label">
                <input
                    className={`createorederform__input createorederform__input_required ${
                        numberErr && 'createorederform__input_invalid'
                    }`}
                    type="tel"
                    name="number"
                    placeholder="+79"
                    maxLength={12}
                    minLength={12}
                    {...register('number', {
                        required: 'это поле обязательно',
                        validate: (value) => {
                            return validatePhone(value, setValue);
                        },
                    })}
                ></input>
                {numberErr && <p className="createorederform__imput-errmesage">{numberErr}</p>}
            </label>
            <span className="createorederform__number_example">
                Введите номер в формате +7. Например: +79993224599
            </span>
            <CreateOrder formState={formState}></CreateOrder>
        </form>
    );
};
