import { IproductType } from '../../../shared/types/types';

export interface Iprops {
    basket: IproductType[];
    sumBasket: (basketArr: IproductType[]) => number;
    setOrderAccepted: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IclientData {
    clientApartments: string;
    clientBuilding: string;
    clientComments: string;
    clientName: string;
    clientStreet: string;
    number: string;
}
export interface IorderData {
    products: string[];
    owner: string;
    clientData: IclientData;
}

export interface IorderResponse {
    name: string;
    owner: string;
    phone: string;
    products: string[];
    __v?: number;
    _id: string;
}

export interface Iform {
    clientName: string;
    clientStreet: string;
    clientBuilding: string;
    clientApartments: string;
    clientComments: string;
    number: string;
}
