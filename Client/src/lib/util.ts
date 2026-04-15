export function currencyFormat(amount: number, currency: string) {
  return `${currency} ${(amount / 100).toFixed(2)}`;
}
