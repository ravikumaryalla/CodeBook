import classes from "./App.module.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Products from "./pages/products/Products";

const App = () => {
  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
