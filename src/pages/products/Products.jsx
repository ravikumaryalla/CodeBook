import classes from "./Products.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import data from "../../data/data";
import ProductCard from "../../components/product-card/ProductCard";
import Filters from "./filters/Filters";

const Products = () => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className={classes.productsContainer}>
      {showFilters && <Filters onClose={() => setShowFilters(false)} />}
      <div className={classes.header}>
        <p>All E-Books</p>
        <MoreVertIcon
          sx={{
            cursor: "pointer",
            color: "black",
            backgroundColor: "var(--border-color)",
            borderRadius: "0.2rem",
            padding: "0.2rem",
          }}
          onClick={() => setShowFilters(true)}
        />
      </div>
      <div className={classes.productContent}>
        {data.products.map((item, index) => {
          return (
            <ProductCard
              key={index}
              title={item.name}
              description={item.long_description}
              price={item.price}
              image={item.poster}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
