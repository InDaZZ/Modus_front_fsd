import { IproductType } from '../types/types';

export function calckBasketSum(basketArr: IproductType[]) {
    let sum = 0;
    for (let i = 0; i < basketArr.length; i++) {
        if (basketArr[i].sale !== 0) {
            let procent = ((basketArr[i].cost as unknown as number) / 100) * basketArr[i].sale;
            let constAfterSale = Math.round((basketArr[i].cost as unknown as number) - procent);

            sum = sum + constAfterSale * basketArr[i].quantityСounter;
        } else sum = (basketArr[i].cost as unknown as number) * basketArr[i].quantityСounter + sum;
    }
    console.log(sum);
    return sum;
}
