import { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="main-container">
      {products?.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
}
