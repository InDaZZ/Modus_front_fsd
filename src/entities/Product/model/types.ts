import { IproductType } from '../../../shared/types/types';
export interface Iprops {
    image: string;
    name: string;
    cost: string;
    sale: number;
    availability: boolean;
    product: IproductType;
    children: React.JSX.Element | React.JSX.Element[];
}
