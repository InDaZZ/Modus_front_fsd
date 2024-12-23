import { mainApi } from '../../../shared/Api/api';
import { IproductType } from '../../../shared/types/types';

export const HotApi = {
    getHot: (): Promise<IproductType[]> =>
        mainApi({
            url: '/allhot',
            method: 'GET',
        }),
};
