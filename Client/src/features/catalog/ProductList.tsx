import { Grid } from "@mui/material";
import type { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
};

function ProductList({ products }: Props) {
  return (
    <Grid container spacing={3}>
      {products.map((p) => (
        <Grid key={p.id} size={3} display="flex">
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
