import { mainApi } from '../../../shared/Api/api';
import { IproductType } from '../../../shared/types/types';

const admin = localStorage.getItem('adminToken');
enum Path {
    roll = '/updateroll',
    pizza = '/updatepizza',
    hot = '/updatehot',
}

export const stopProductApi = {
    stop: (
        pathType: 'roll' | 'pizza' | 'hot',
        product: { _id: string; availability: boolean },
    ): Promise<IproductType> => {
        return mainApi({
            url: Path[pathType],
            method: 'PATCH',
            data: JSON.stringify({ ...product, owner: admin }),
        });
    },
};
