import { useWishlist } from "../../context/wishlist";
import WishlistCard from "./WishlistCard";
import styles from "./Wishlist.module.css";
import Empty from "../../components/Empty/Empty";
import { useDocumentTitle } from "../../hooks";

export default function () {
  const { wishlist } = useWishlist();

  useDocumentTitle("Wishlist | Aegis Store");

  return (
    <div className="main-container">
      <div className={styles.wishlist__container}>
        {wishlist.length === 0 ? (
          <Empty
            title={"Your Wishlist is empty"}
            message="Checkout the products and wishlist the ones you want !!"
          />
        ) : (
          <div className={styles.wishlist__cards}>
            {wishlist.map((wishlistItem) => (
              <WishlistCard
                key={wishlistItem._id}
                wishlistItem={wishlistItem}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
