import { mainApi } from '../../../shared/Api/api';
import { Ipizza } from '../model/types';

export const PizzaApi = {
    getPizza: (): Promise<Ipizza[]> =>
        mainApi({
            url: '/allpizza',
            method: 'GET',
        }),
};
