import { useParams } from "react-router-dom";
import { useProducts } from "../../../context/products/Context";
import { getProductById } from "./Util";
import styles from "./Detail.module.css";

export default function () {
  const { productId } = useParams();
  const { products } = useProducts();

  const product = getProductById(productId, products);

  return (
    <div className="main-container">
      <div>
        <img src={product?.imageUrl} alt={product?.title} />
      </div>
      <div>
        <div>{product?.name}</div>
        <div>{product?.description}</div>
        <div>
          <div>{product?.sellingPrice}</div>
          <div>{product?.actualPrice}</div>
        </div>
        <div>
          <div>{product?.discount}</div>
          <div>{product?.rating}</div>
        </div>
        <div>
          <div>Features</div>
          <div>
            {product?.features?.map((feature, index) => (
              <div key={index}>{feature}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
