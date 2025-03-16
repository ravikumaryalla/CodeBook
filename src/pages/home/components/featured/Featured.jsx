import classes from "./Featured.module.css";
import ProductCard from "../../../../components/product-card/ProductCard";

const codingBooks = [
  {
    title: "Python Crash Course",
    description:
      "A fast-paced, project-based introduction to Python programming.",
    price: 39.99,
    image: "https://m.media-amazon.com/images/I/71pys4B4OVL._SY522_.jpg",
    rating: 5,
  },
  {
    title: "Eloquent JavaScript",
    description:
      "A deep dive into JavaScript, covering modern features and concepts.",
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/71pys4B4OVL._SY522_.jpg",
    rating: 2,
  },
  {
    title: "You Don’t Know JS",
    description: "A must-read series exploring the intricacies of JavaScript.",
    price: 34.99,
    image: "https://m.media-amazon.com/images/I/71pys4B4OVL._SY522_.jpg",
    rating: 4,
  },
];
const Featured = () => {
  return (
    <div className={classes.featuredSection}>
      <div className={classes.featuredHeading}>
        Featured eBooks
        <hr />
      </div>
      <div className={classes.featuredContainer}>
        {codingBooks.map((item, index) => {
          return (
            <ProductCard
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
