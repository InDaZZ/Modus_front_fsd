import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import Modal from '../../shared/Modal/Modal';
import { Categories } from '../../pages/categories/index';
import { Rolls } from '../../pages/Rolls/index';
import { Pizza } from '../../pages/Pizza/index';
import { Hot } from '../../pages/Hot';
import { Basket } from '../../pages/Basket/index';
import { AdminAuthentication } from '../../pages/AdminAuthentication/index';
import { ProtectedAdminRoute } from '../../pages/ProtectedAdminRoute/index';
import { Admin } from '../../pages/Admin/index';
import { AdminRolls } from '../../pages/AdminRolls/index';
import { AdminPizza } from '../../pages/AdminPizza/index';
import { userApi } from '../api/api';

export const AppRouter = () => {
    function registrUserAnonim() {
        userApi
            .createAnonimUser()
            .then((res) => {
                console.log(res, 'look 1111111');
                localStorage.setItem('token', res.token);
            })
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            registrUserAnonim();
        } else return;
    }, []);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Categories />,
        },
        {
            path: '/rolls',
            element: [<Rolls key="Rolls" />, <Modal key="Modal"></Modal>],
        },
        {
            path: '/pizza',
            element: [<Pizza key="Pizza" />, <Modal key="Modal"></Modal>],
        },
        {
            path: '/hot',
            element: [<Hot key="Hot" />, <Modal key="Modal"></Modal>],
        },
        {
            path: '/basket',
            element: <Basket key="Basket" />,
        },
        {
            path: '/adminauthpage',
            element: <AdminAuthentication key="AdminAuthentication" />,
        },
        {
            element: <ProtectedAdminRoute key="ProtectedAdminRoute" />,
            children: [
                {
                    path: '/adminpage',
                    element: <Admin key="Admin" />,
                },
                {
                    path: '/adminpagerolls',
                    element: [<AdminRolls key="AdminRolls" />, <Modal key="Modal"></Modal>],
                    children: [
                        {
                            path: 'stoplist',
                            element: [<AdminRolls key="AdminRolls" />, <Modal key="Modal"></Modal>],
                        },
                    ],
                },
                {
                    path: '/adminpagepizza',
                    element: [<AdminPizza key="AdminPizza" />, <Modal key="Modal"></Modal>],
                    children: [
                        {
                            path: 'stoplist',
                            element: [<AdminPizza key="AdminPizza" />, <Modal key="Modal"></Modal>],
                        },
                    ],
                },
                {
                    path: '/adminpagerolls',
                    element: [<AdminRolls key="AdminRolls" />, <Modal key="Modal"></Modal>],
                    children: [
                        {
                            path: 'stoplist',
                            element: [<AdminRolls key="AdminRolls" />, <Modal key="Modal"></Modal>],
                        },
                    ],
                },
            ],
        },
    ]);

    return (
        <div className="app">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};
