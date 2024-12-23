import { mainApi } from '../../Api/api';
import { IproductType } from '../../types/types';

const admin = localStorage.getItem('adminToken');
enum Path {
    roll = '/createroll',
    pizza = '/createpizza',
    hot = '/createhot',
}

export const addModalApi = {
    create: (pathType: 'roll' | 'pizza' | 'hot', product: IproductType): Promise<IproductType> => {
        return mainApi({
            url: Path[pathType],
            method: 'POST',
            data: JSON.stringify({ ...product, owner: admin }),
        });
    },
};
