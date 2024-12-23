import { mainApi } from '../../../shared/Api/api';

export const adminUserApi = {
    adminUserLogin: (data: { name: string; password: string }): Promise<string> =>
        mainApi({
            url: '/adminpanellogin',
            method: 'POST',
            data: data,
        }),
};
