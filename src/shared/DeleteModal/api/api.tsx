import { mainApi } from '../../Api/api';
import { IproductType } from '../../types/types';

const admin = localStorage.getItem('adminToken');
enum Path {
    roll = '/deletroll',
    pizza = '/deletpizza',
    hot = '/delethot',
}
export const deleteModalApi = {
    delete: (pathType: 'roll' | 'pizza' | 'hot', product: IproductType) => {
        return mainApi({
            url: Path[pathType],
            method: 'DELETE',
            data: JSON.stringify({ ...product, owner: admin }),
        });
    },
};
