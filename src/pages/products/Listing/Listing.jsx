import { useProducts } from "../../../context/products/Context";
import styles from "./Listing.module.css";
import Filters from "./Filters";
import Product from "./Product";

export default function () {
  const { products } = useProducts();

  return (
    <section className={styles.listing__container}>
      <div className="main-container">
        <div className={styles.products__info}>
          Showing {products.length && products.length} products of 20
        </div>
        <div className={`${styles.listing}`}>
          <Filters />
          <>
            <div className={`${styles.products__container}`}>
              {products?.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </>
        </div>
      </div>
    </section>
  );
}
