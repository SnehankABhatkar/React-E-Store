import type { FieldValues, Path, UseFormSetError } from "react-hook-form";
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

export function handleApiError<T extends FieldValues>(
  error: unknown,
  setError: UseFormSetError<T>,
  fieldNames: Path<T>[],
) {
  const apiError = (error as { message: string }) || {};

  if (apiError.message && typeof apiError.message === "string") {
    const errorArray = apiError.message.split(",");

    errorArray.forEach((e) => {
      const matchedField = fieldNames.find((fieldName) =>
        e.toLowerCase().includes(fieldName.toString().toLowerCase()),
      );

      if (matchedField) setError(matchedField, { message: e.trim() });
    });
  }
}
