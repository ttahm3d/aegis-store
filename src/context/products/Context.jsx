import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { productsReducer } from "./Reducer";
import axios from "axios";
import {
  getResultantProducts,
  sortProductsByPrice,
  sortProductByRatings,
  filterProductsByCategory,
  filterProductsWithMinPrice,
  filterByRating,
  filterOutOutOfStockProducts,
  showFastDeliveryProducts,
} from "./utils";

const initialState = {
  sortByPrice: "",
  sortByRating: "",
  categories: [],
  minPrice: 0,
  rating: 0,
  showOnlyInStock: false,
  fastDelivery: false,
};

const ProductsContext = createContext();

const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

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

  const productsToShow = getResultantProducts(
    state,
    sortProductsByPrice,
    sortProductByRatings,
    filterProductsByCategory,
    filterProductsWithMinPrice,
    filterOutOutOfStockProducts,
    showFastDeliveryProducts,
    filterByRating
  )(products);

  return (
    <ProductsContext.Provider
      value={{
        products: productsToShow,
        state,
        dispatch,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { useProducts, ProductsProvider };
