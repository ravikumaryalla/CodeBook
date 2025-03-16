import classes from "./Products.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import data from "../../data/data";
import ProductCard from "../../components/product-card/ProductCard";

const Products = () => {
  return (
    <div className={classes.productsContainer}>
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
