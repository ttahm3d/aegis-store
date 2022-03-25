import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";

export default function () {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("/api/categories");
        setCategories(data?.categories);
      } catch (e) {
        console.log("error", e);
      }
    }

    fetchData();
  }, []);

  return (
    <section className={`${styles.categories}`}>
      <div className="main-container">
        <h3 className="heading-2 text-center">Categories</h3>
        <div className={styles.categories__container}>
          {categories.map(({ id, name, imageUrl, title }) => (
            <div key={id} className={`card shadow ${styles.categories__card}`}>
              <div className={`card-image-container`}>
                <img
                  src={imageUrl}
                  alt={name}
                  width={300}
                  height={400}
                  className={styles.category__image}
                />
              </div>
              <div className={styles.categories__description__container}>
                <div className={styles.categories__description__title}>
                  {title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
