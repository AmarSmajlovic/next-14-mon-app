import React from "react";
import { get } from "@/services/Client";
import ProductsTable, { Product } from "./components/ProductsTable";

const Products = async () => {
  const { data } = await get("https://junior-test.mntzdevs.com/api/products/");

  const products = Object.values(data.products) as Product[];

  return <ProductsTable data={products} />;
};

export default Products;
