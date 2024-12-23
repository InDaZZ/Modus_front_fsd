export function calcSale(cost: string, sale: number): number {
    let procent = (+cost / 100) * sale;
    return Math.round(+cost - procent);
}
