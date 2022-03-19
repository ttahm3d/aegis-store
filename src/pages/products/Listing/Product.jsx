import styles from "./Listing.module.css";

export default function (props) {
  const {
    _id,
    title,
    name,
    size,
    price,
    imageUrl,
    discount,
    aegisAssured,
    count,
    categoryName,
  } = props;

  return (
    <div className={`card card-shadow`}>
      <div className="card-image-container">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
}
