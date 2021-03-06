import { useProducts } from "../../../context/products/Context";
import styles from "./Listing.module.css";
import Filters from "./Filters";
import Product from "./Product";
import { useDocumentTitle } from "../../../hooks";

export default function () {
  const { products } = useProducts();

  useDocumentTitle("Products | Aegis Store");

  return (
    <section className={styles.listing__container}>
      <div className="main-container">
        <div className={`${styles.listing}`}>
          <Filters />
          <div>
            <>
              <div className={styles.listing__info}>
                Showing {products.length && products.length} products of 20
              </div>
            </>
            <div className={`${styles.products__container}`}>
              {products?.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
