import { mainApi } from '../../../shared/Api/api';
import { IorderData, IorderResponse } from '../model/types';

export const anonimOrderApi = {
    createOrder: (data: IorderData): Promise<IorderResponse> =>
        mainApi({
            url: '/order',
            method: 'POST',
            data: data,
        }),
};
