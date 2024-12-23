import { mainApi } from '../../../shared/Api/api';
import { IproductType } from '../../../shared/types/types';

export const PizzaApi = {
    getPizza: (): Promise<IproductType[]> =>
        mainApi({
            url: '/allpizza',
            method: 'GET',
        }),
};
