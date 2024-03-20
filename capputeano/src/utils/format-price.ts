export function formatValue(valueInCents: number) {
    const formatedvalue = valueInCents / 100;
    return formatedvalue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}