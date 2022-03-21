import { useProducts } from "../../../context/products/Context";
import styles from "./Filter.module.css";

export default function () {
  const { state, dispatch } = useProducts();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__title}>Filters</div>
      <div className="sidebar-section">
        <div className={styles.sidebar__section__heading}>Sort By</div>
        <div className="input-group-hz">
          <input
            type="radio"
            id="sort-low-to-high"
            name="sortBy"
            value="low-to-high"
            checked={state.sortBy === "low-to-high"}
            onChange={(e) => {
              dispatch({
                type: "SORT_BY",
                payload: e.target.value,
              });
            }}
          />
          <label className={styles.sidebar__label} htmlFor="sort-low-to-high">
            Low to high
          </label>
        </div>
        <div className="input-group-hz">
          <input
            type="radio"
            id="sort-high-to-low"
            name="sortBy"
            value="high-to-low"
            checked={state.sortBy === "high-to-low"}
            onChange={(e) => {
              dispatch({
                type: "SORT_BY",
                payload: e.target.value,
              });
            }}
          />
          <label className={styles.sidebar__label} htmlFor="sort-high-to-low">
            High to low
          </label>
        </div>
      </div>
      <div className="sidebar-section">
        <div className={styles.sidebar__section__heading}>Categories</div>
        <div className="input-group-hz">
          <input
            type="checkbox"
            name="categories"
            id="jersey"
            checked={state?.categories?.jersey === true ? true : false}
            onChange={(e) =>
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: { name: "jersey", value: e.target.checked },
              })
            }
          />
          <label className={styles.sidebar__label} htmlFor="jersey">
            Jerseys
          </label>
        </div>
        <div className="input-group-hz">
          <input
            type="checkbox"
            name="categories"
            id="hoodie"
            checked={state?.categories?.hoodie === true ? true : false}
            onChange={(e) =>
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: { name: "hoodie", value: e.target.checked },
              })
            }
          />
          <label className={styles.sidebar__label} htmlFor="hoodie">
            Hoodies
          </label>
        </div>
        <div className="input-group-hz">
          <input
            type="checkbox"
            name="categories"
            id="keyboard"
            checked={state?.categories?.keyboard === true ? true : false}
            onChange={(e) =>
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: { name: "keyboard", value: e.target.checked },
              })
            }
          />
          <label className={styles.sidebar__label} htmlFor="keyboard">
            Keyboards
          </label>
        </div>
        <div className="input-group-hz">
          <input
            type="checkbox"
            name="categories"
            id="chair"
            checked={state?.categories?.chair === true ? true : false}
            onChange={(e) =>
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: { name: "chair", value: e.target.checked },
              })
            }
          />
          <label className={styles.sidebar__label} htmlFor="chair">
            Chairs
          </label>
        </div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-section-heading products-sidebar-heading">
          Ratings
        </div>
        <div class="input-group-hz">
          <input type="radio" name="rating" id="four-and-above" />
          <label htmlFor="four-and-above">4 & above</label>
        </div>
        <div class="input-group-hz">
          <input type="radio" name="rating" id="three-and-above" />
          <label htmlFor="three-and-above">3 & above</label>
        </div>
        <div class="input-group-hz">
          <input type="radio" name="rating" id="two-and-above" />
          <label htmlFor="two-and-above">2 & above</label>
        </div>
        <div class="input-group-hz">
          <input type="radio" name="rating" id="one-and-above" />
          <label htmlFor="one-and-above">1 & above</label>
        </div>
      </div>
    </aside>
  );
}
