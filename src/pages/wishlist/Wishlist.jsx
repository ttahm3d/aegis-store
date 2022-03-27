import { useWishlist } from "../../context/wishlist";

export default function () {
  const { wishlist } = useWishlist();

  return (
    <div className="main-container">
      {wishlist.length === 0 ? "no items to show" : "wishlist cards"}
    </div>
  );
}
