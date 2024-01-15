"use client";

import Table from "@/components/Table";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React from "react";

export type Product = {
  name: string;
  price: number;
};

type Props = {
  data: Product[];
};

const ProductsTable = ({ data }: Props) => {
  const columnHelper = createColumnHelper<Product>();

  const columns: ColumnDef<Product, any>[] = [
    columnHelper.accessor("name", {
      header: (props) => {
        return (
          <div className="text-start">{props.column.id.toUpperCase()}</div>
        );
      },
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("price", {
      header: (props) => {
        return (
          <div className="text-start">{props.column.id.toUpperCase()}</div>
        );
      },
      cell: (info) => info.getValue(),
    }),
  ];

  return <Table data={data} columns={columns} />;
};

export default ProductsTable;
