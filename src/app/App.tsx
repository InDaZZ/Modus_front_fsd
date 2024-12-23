import './App.scss';
import React from 'react';
import { AppRouter } from './router/index';
import { Providers } from './providers/index';
import { mainApi } from '../shared/Api/api';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        console.log();
        mainApi({
            url: '/allroll',
            method: 'GET',
        }).then((res) => console.log(res, 'вот тут'));
    }, []);

    return (
        <Providers>
            <AppRouter></AppRouter>
        </Providers>
    );
}

export default App;
