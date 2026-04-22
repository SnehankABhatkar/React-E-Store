import type { PaymentSummary, ShippingAddress } from "../app/models/order";

export function currencyFormat(amount: number, currency: string = "$") {
  return `${currency}${(amount / 100).toFixed(2)}`;
}

export function filterEmptyValues(values: object) {
  return Object.fromEntries(
    Object.entries(values).filter(
      ([, value]) =>
        value !== "" &&
        value !== null &&
        value !== undefined &&
        value.length !== 0,
    ),
  );
}

export function getAddressStr(value: ShippingAddress) {
  return `${value?.name}, ${value?.line1}, ${value?.city}, ${value?.postal_code}, ${value?.country}`;
}

export function getPaymentStr(value?: PaymentSummary) {
  return `${value?.brand.toLocaleUpperCase()}, **** **** **** ${value?.last4}, Exp: ${value?.exp_month}/${value?.exp_year}`;
}
