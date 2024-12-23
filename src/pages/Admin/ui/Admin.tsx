import React from 'react';
import './Admin.scss';
import { NavLink, Outlet } from 'react-router-dom';

export const Admin = () => {
    return (
        <section className="admin">
            <NavLink className={'admin__category'} to={'/adminpagerolls'}>
                Роллы
            </NavLink>
            <NavLink className={'admin__category'} to={'/'}>
                Пицца
            </NavLink>
            <NavLink className={'admin__category'} to={'/'}>
                Горячие
            </NavLink>
        </section>
    );
};
