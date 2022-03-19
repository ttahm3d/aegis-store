import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Listing.module.css";
import Filters from "./Filters";

export default function () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data?.products);
      } catch (e) {
        console.log("error", e);
      }
    }

    fetchData();
  }, []);

  console.log(products);

  return (
    <section className={styles.listing__container}>
      <div className={`${styles.listing} main-container`}>
        <Filters />
        <div>
          {products?.map((product) => (
            <div>{product.name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
