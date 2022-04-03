import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../../context/products/Context";

export default function () {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const { dispatch } = useProducts();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("/api/categories");
        setCategories(data?.categories);
      } catch (e) {
        console.error("error", e);
      }
    }

    fetchData();
  }, []);

  const handleNavigation = (categoryName) => {
    dispatch({ type: "ADD_CATEGORY_TO_CATEGORIES", payload: categoryName });
    navigate("/products");
  };

  return (
    <section className={`${styles.categories}`}>
      <div className="main-container">
        <h3 className={styles.heading}>Categories</h3>
        <div className={styles.categories__container}>
          {categories.map(({ id, name, imageUrl, title }) => (
            <div
              key={id}
              className={`card shadow ${styles.categories__card}`}
              onClick={() => handleNavigation(name)}>
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
