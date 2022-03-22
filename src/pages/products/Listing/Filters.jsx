import { useState } from "react";
import { useProducts } from "../../../context/products/Context";
import {
  AiFillStar,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import styles from "./Filter.module.css";
import { useScreenWidth } from "../../../hooks";

export default function () {
  const { state, dispatch } = useProducts();
  const [collapse, setCollapse] = useState(false);
  const [width] = useScreenWidth();
  const optionsList = [
    {
      price: 0,
      display: "0",
    },
    {
      price: 4000,
      display: "4K",
    },
    {
      price: 8000,
      display: "8K",
    },
    {
      price: 12000,
      display: "12K",
    },
    {
      price: 16000,
      display: "16k",
    },
  ];

  const handleCategories = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      return { type: "ADD_CATEGORY_TO_CATEGORIES", payload: value };
    }
    return { type: "REMOVE_CATEGORY_FROM_CATEGORIES", payload: value };
  };

  //

  return (
    <aside className={styles.sidebar}>
      <div className="flex justify-between align-center">
        <div className={styles.sidebar__title}>Filters</div>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </button>
        <button
          className={styles.sidebar__collapse__btn}
          onClick={() => setCollapse((c) => !c)}>
          {collapse ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
        </button>
      </div>
      <section
        style={{
          display: collapse && width < 1040 ? "none" : "block",
          transition: "0.4s ease all",
        }}>
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
              Price &mdash; Low to high
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
              Price &mdash; High to low
            </label>
          </div>
        </div>
        <div className="sidebar-section">
          <div className={styles.sidebar__section__heading}>Out of Stock</div>
          <div className="input-group-hz">
            <input
              type="checkbox"
              id="show-only-in-stock"
              checked={state.showOnlyInStock ? true : false}
              onChange={(e) =>
                dispatch({ type: "OUT_OF_STOCK", payload: e.target.checked })
              }
            />
            <label
              className={styles.sidebar__label}
              htmlFor="show-only-in-stock">
              Show only in Stock
            </label>
          </div>
        </div>
        <div className="sidebar-section">
          <div className={styles.sidebar__section__heading}>Fast Delivery</div>
          <div className="input-group-hz">
            <input
              type="checkbox"
              id="fast-delivery"
              checked={state.fastDelivery ? true : false}
              onChange={(e) =>
                dispatch({ type: "FAST_DELIVERY", payload: e.target.checked })
              }
            />
            <label className={styles.sidebar__label} htmlFor="fast-delivery">
              Only Fast Delivery
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
        <div className="sidebar-section">
          <div className={styles.sidebar__section__heading}>
            Filter by Price
          </div>
          <label className={styles.sidebar__label} htmlFor="price">
            Minimum Price: {state.minPrice}
          </label>
          <input
            type="range"
            id="price"
            min={0}
            max={16000}
            step={4000}
            list="tickmarks"
            value={state.minPrice}
            onChange={(e) =>
              dispatch({
                type: "MIN_PRICE",
                payload: e.target.value,
              })
            }
          />
          <datalist id="tickmarks" className="flex flex-gap-1 justify-between">
            {optionsList.map(({ price, display }) => (
              <option key={price} value={price} label={display}></option>
            ))}
          </datalist>
        </div>
        <div className="sidebar-section">
          <div className={styles.sidebar__section__heading}>Rating</div>
          <div className="input-group-hz">
            <input
              type="radio"
              id="rating-more-than-4"
              name="rating"
              value={4}
              checked={state.rating === "4"}
              onChange={(e) => {
                dispatch({
                  type: "FILTER_BY_RATING",
                  payload: e.target.value,
                });
              }}
            />
            <label
              className={`${styles.sidebar__label} flex align-center`}
              htmlFor="rating-more-than-4">
              4&nbsp;
              <AiFillStar /> and above
            </label>
          </div>
          <div className="input-group-hz">
            <input
              type="radio"
              id="rating-more-than-3"
              name="rating"
              value={3}
              checked={state.rating === "3"}
              onChange={(e) => {
                dispatch({
                  type: "FILTER_BY_RATING",
                  payload: e.target.value,
                });
              }}
            />
            <label
              className={`${styles.sidebar__label} flex align-center`}
              htmlFor="rating-more-than-3">
              3&nbsp;
              <AiFillStar /> and above
            </label>
          </div>
          <div className="input-group-hz">
            <input
              type="radio"
              id="rating-more-than-2"
              name="rating"
              value={2}
              checked={state.rating === "2"}
              onChange={(e) => {
                dispatch({
                  type: "FILTER_BY_RATING",
                  payload: e.target.value,
                });
              }}
            />
            <label
              className={`${styles.sidebar__label} flex align-center`}
              htmlFor="rating-more-than-2">
              2&nbsp;
              <AiFillStar /> and above
            </label>
          </div>
        </div>
      </section>
    </aside>
  );
}
