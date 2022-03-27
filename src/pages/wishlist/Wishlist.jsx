import { useWishlist } from "../../context/wishlist";

export default function () {
  const { wishlist } = useWishlist();

  console.log("wishlist", wishlist);

  return <div className="main-container">Wishlist</div>;
}
