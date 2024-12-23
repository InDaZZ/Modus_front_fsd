import { mainApi } from '../../../shared/Api/api';
import { IrollInterface } from '../../Rolls/model/types';

export const RollsApi = {
    getRolls: (): Promise<IrollInterface[]> =>
        mainApi({
            url: '/allroll',
            method: 'GET',
        }),
};
