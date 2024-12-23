import React from 'react';
import './AdminAuthenticationForm.scss';
import { FieldValues, useForm } from 'react-hook-form';
import { adminUserApi } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { IloginData } from '../model/types';

export const AdminAuthenticationForm = () => {
    const navigate = useNavigate();
    const { register, formState, handleSubmit, getValues } = useForm();
    const onSubmit = () => {
        localStorage.removeItem('adminToken');
        console.log(getValues());
        const loginData: IloginData = getValues() as IloginData;
        adminUserApi
            .adminUserLogin(loginData)
            .then((res) => {
                console.log(res);
                localStorage.setItem('adminToken', res);
                navigate('/adminpage', { replace: true });
            })
            .catch((err) => console.log(err));
    };
    return (
        <form className="adminauthform" onSubmit={handleSubmit(onSubmit)}>
            <input
                className="adminauthform__input"
                placeholder="Логин"
                name="name"
                {...register('name', {
                    required: true,
                })}
            ></input>
            <input
                className="adminauthform__input"
                placeholder="Пароль"
                name="password"
                {...register('password', {
                    required: true,
                })}
            ></input>
            <button
                className={
                    formState.isValid
                        ? `adminauthform__submit-button`
                        : `adminauthform__submit-button adminauthform__submit-button_inactive`
                }
                type="submit"
            >
                Войти
            </button>
        </form>
    );
};
