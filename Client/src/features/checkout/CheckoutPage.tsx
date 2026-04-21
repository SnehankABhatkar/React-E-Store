import { Grid, Typography } from "@mui/material";
import OrderSummary from "../../app/shared/components/OrderSummary";
import CheckoutStepper from "./CheckoutStepper";
import { loadStripe, type StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useFetchBasketQuery } from "../basket/basketApi";
import { useCreatePaymentIntentMutation } from "./checkoutApi";
import { useEffect, useRef } from "react";
import { useAppSelector } from "../../app/store/store";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

export default function CheckoutPage() {
  const { data: basket } = useFetchBasketQuery();
  const [createPaymentIntent, { isLoading }] = useCreatePaymentIntentMutation();
  const created = useRef(false);
  const { isDarkMode } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (!created.current) createPaymentIntent(); //Dev trick
    created.current = true;
  }, [createPaymentIntent]);

  let options: StripeElementsOptions | undefined;
  if (!basket?.clientSecret) {
    options = undefined;
  } else {
    options = {
      clientSecret: basket.clientSecret,
      appearance: {
        labels: "floating",
        theme: isDarkMode ? "night" : "stripe",
        //theme: "night",
      },
    };
  }
  //  useMemo(() => {
  //   if (!basket?.clientSecret) return undefined;
  //   return {
  //     clientSecret: basket.clientSecret,
  //   };
  // }, [basket?.clientSecret]);

  return (
    <Grid container spacing={2}>
      <Grid size={8}>
        {!stripePromise || !options || isLoading ? (
          <Typography variant="h6">Loading Checkout...</Typography>
        ) : (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutStepper />
          </Elements>
        )}
      </Grid>
      <Grid size={4}>
        <OrderSummary />
      </Grid>
    </Grid>
  );
}
