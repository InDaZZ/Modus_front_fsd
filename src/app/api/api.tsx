import { mainApi } from '../../shared/Api/api';
import { IanonimUser } from '../model/types';
export const userApi = {
    createAnonimUser: (): Promise<IanonimUser> => {
        return mainApi({
            url: '/signup',
            method: 'POST',
        });
    },
};
