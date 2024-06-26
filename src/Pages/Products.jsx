import React from "react";
import DynamicTable from "../common/DynamicTable";
import Navbar from "../common/Navbar";
import ProductsContainer from "../container/products/products.container";
import { productsColumns } from "../description/products/products.description";

const Products = () => {
  const { actionsBtn, productsData, handleAdd } = ProductsContainer();

  return (
    <div>
      <Navbar
        title="Products"
        showExportBtn={true}
        showNewAddBtn={true}
        newAddBtnText="New Product"
        openCanvas={handleAdd}
      />

      <div className="product-table">
        <DynamicTable
          columns={productsColumns}
          data={productsData}
          actions={actionsBtn}
        />
      </div>
    </div>
  );
};

export default Products;
