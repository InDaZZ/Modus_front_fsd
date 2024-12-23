import { UseFormSetValue } from 'react-hook-form';
import { Iform } from './types';

export const validatePhone = (value: string, setValue: UseFormSetValue<Iform>) => {
    if (value.length < 2 || value[0] !== '+' || value[1] !== '7') {
        setValue('number', '+7', { shouldTouch: true });
    } else if (!/[+7]+[0-9]{11}$/gi.test(value)) {
        return 'Пожалуйста введите номер в формате +7';
    }
    return true;
};
