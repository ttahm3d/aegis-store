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
  sortProducts,
  filterProductsByCategory,
} from "./utils";

const initialState = {
  sortBy: "",
  categories: {
    jersey: false,
    hoodie: false,
    keyboard: false,
    chair: false,
  },
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

  const productsToShow = getResultantProducts(state, sortProducts)(products);

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
