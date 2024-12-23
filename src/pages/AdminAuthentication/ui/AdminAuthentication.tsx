import React from 'react';
import './AdminAuthentication.scss';
import { AdminAuthenticationForm } from '../../../entities/AdminAuthenticationForm';

export const AdminAuthentication = () => {
    return (
        <section className="adminAuth">
            <AdminAuthenticationForm></AdminAuthenticationForm>
        </section>
    );
};
