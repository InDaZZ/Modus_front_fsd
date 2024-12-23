import { mainApi } from '../../../shared/Api/api';
import { IproductType } from '../../../shared/types/types';

export const RollsApi = {
    getRolls: (): Promise<IproductType[]> =>
        mainApi({
            url: '/allroll',
            method: 'GET',
        }),
};
