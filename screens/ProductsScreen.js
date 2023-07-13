import { useLayoutEffect } from "react";
import ProductsList from "../components/ProductsList/ProductsList";
import useFetch from "../hooks/useFetch";
import NoDataMessage from "../components/NoDataMessage";
import { ENDPOINTS, MESSAGES } from "../constants/messages";

export default function ProductsScreen() {
  const { data } = useFetch(ENDPOINTS.PRODUCTS, {});

  if (data.length === 0) {
    return <NoDataMessage>{MESSAGES.NO_CATEGORY_MEALS}</NoDataMessage>;
  }

  return <ProductsList items={data.products} />;
}
