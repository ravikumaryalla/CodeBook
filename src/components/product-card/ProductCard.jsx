import classes from "./ProductCard.module.css";
import Rating from "@mui/material/Rating";

const ProductCard = ({ title, description, price, image, rating }) => {
  return (
    <div className={classes.ProductCard}>
      <div className={classes.ProductCardImage}>
        <img src={image} alt="product-image" />
      </div>
      <div className={classes.ProductCardInfo}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={classes.ProductCardRating}>
          <Rating
            readOnly
            value={rating}
            precision={0.5}
            sx={{
              "& .MuiRating-icon": {
                border: "1px solid var(--text-color)",
              },
            }}
          />
        </div>
        <div className={classes.cardFooter}>
          <p>{`₹ ${price}`}</p>
          <button>Add to Cart +</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
