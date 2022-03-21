import { useProducts } from "../../../context/products/Context";
import styles from "./Filter.module.css";

export default function () {
  const { state, dispatch } = useProducts();

  console.log(state);

  const handleCategories = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      return { type: "ADD_CATEGORY_TO_CATEGORIES", payload: value };
    }
    return { type: "REMOVE_CATEGORY_FROM_CATEGORIES", payload: value };
  };

  return (
    <aside className={styles.sidebar}>
      <div className="flex justify-between align-center">
        <div className={styles.sidebar__title}>Filters</div>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </button>
      </div>
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
            value="jersey"
            id="jersey"
            checked={
              state.categories.find((category) => category === "jersey")
                ? true
                : false
            }
            onChange={(e) => dispatch(handleCategories(e))}
          />
          <label className={styles.sidebar__label} htmlFor="jersey">
            Jerseys
          </label>
        </div>
        <div className="input-group-hz">
          <input
            type="checkbox"
            name="categories"
            value="hoodie"
            checked={
              state.categories.find((category) => category === "hoodie")
                ? true
                : false
            }
            id="hoodie"
            onChange={(e) => dispatch(handleCategories(e))}
          />
          <label className={styles.sidebar__label} htmlFor="hoodie">
            Hoodies
          </label>
        </div>
        <div className="input-group-hz">
          <input
            type="checkbox"
            name="categories"
            value="keyboard"
            checked={
              state.categories.find((category) => category === "keyboard")
                ? true
                : false
            }
            id="keyboard"
            onChange={(e) => dispatch(handleCategories(e))}
          />
          <label className={styles.sidebar__label} htmlFor="keyboard">
            Keyboards
          </label>
        </div>
        <div className="input-group-hz">
          <input
            type="checkbox"
            name="categories"
            value="chair"
            checked={
              state.categories.find((category) => category === "chair")
                ? true
                : false
            }
            id="chair"
            onChange={(e) => dispatch(handleCategories(e))}
          />
          <label className={styles.sidebar__label} htmlFor="chair">
            Chairs
          </label>
        </div>
      </div>
    </aside>
  );
}
