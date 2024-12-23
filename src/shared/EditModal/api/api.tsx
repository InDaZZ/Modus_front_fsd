import { mainApi } from '../../Api/api';
import { IproductType } from '../../types/types';

const admin = localStorage.getItem('adminToken');
enum Path {
    roll = '/updateroll',
    pizza = '/updatepizza',
    hot = '/updatehot',
}

export const editModalApi = {
    edit: (pathType: 'roll' | 'pizza' | 'hot', product: IproductType): Promise<IproductType> => {
        return mainApi({
            url: Path[pathType],
            method: 'PATCH',
            data: JSON.stringify({ ...product, owner: admin }),
        });
    },
};
