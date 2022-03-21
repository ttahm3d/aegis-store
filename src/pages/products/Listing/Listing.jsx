import { useEffect, useState } from "react";
import axios from "axios";
import { useProducts } from "../../../context/products/Context";
import styles from "./Listing.module.css";
import Filters from "./Filters";
import Product from "./Product";

export default function () {
  const { products } = useProducts();

  return (
    <section className={styles.listing__container}>
      <div className={`${styles.listing} main-container`}>
        <Filters />
        <div className={`${styles.products__container}`}>
          {products?.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
