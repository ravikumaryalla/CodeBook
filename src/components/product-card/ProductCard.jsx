import classes from "./ProductCard.module.css";
import Rating from "@mui/material/Rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";

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
            emptyIcon={
              <StarBorderIcon
                style={{ color: "var(--text-color)" }}
                fontSize="inherit"
              />
            }
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
