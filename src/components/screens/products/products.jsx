import React from "react";
import styles from "./products.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import ProductsSection from "../home/sections/products/products";
import Product from "./product/product";

const ProductsScreen = () => {
  return (
    <div className={styles.ProductsScreen}>
      <Product />
    </div>
  );
};

export default ProductsScreen;
