import React from "react";
import axios from "axios";
import { cookies } from "next/headers";
import { get } from "@/services/Client";
import ProductsTable from "./components/ProductsTable";

const Products = async () => {
  const { data } = await get("https://junior-test.mntzdevs.com/api/products/");

  const products = Object.values(data.products) as any;

  return <ProductsTable data={products} />;
};

export default Products;
