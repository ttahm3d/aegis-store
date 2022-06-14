import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/cart";
import styles from "./Cart.module.css";
import { Modal } from "../../components";

export default function () {
  const { cart, total } = useCart();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const totalToShow = parseFloat(total + 1500).toFixed(2);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className={`${styles.pricing__container} shadow`}>
      <div className={styles.pricing__heading}>Pricing</div>
      <div className={styles.pricing__items}>
        {cart.map((cartItem) => (
          <div key={cartItem._id} className={styles.pricing__item}>
            <div className={styles.pricing__item__name}>{cartItem.name}</div>
            <div className={styles.pricing__quantity}>{cartItem.qty}</div>
            <div className={styles.pricing__selling__price}>
              &#8377;
              {cartItem.sellingPrice}
            </div>
            <div className={styles.pricing__actual__price}>
              &#8377;{cartItem.actualPrice}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pricing__shipping}>
        <div className={styles.pricing__item__name}>Shipping Charges</div>
        <div className={styles.pricing__price}>&#8377; 1500</div>
      </div>
      <div className={styles.pricing__total}>
        <div className={styles.pricing__total__name}>Total</div>
        <div className={styles.pricing__price}>&#8377;{totalToShow}</div>
      </div>
      <div className="flex flex-column">
        <button className="btn btn-accent" onClick={openModal}>
          Place Order
        </button>
      </div>
      <Modal showModal={showModal} closeModal={closeModal} header="Place Order">
        <div>Checkout</div>
      </Modal>
    </div>
  );
}
