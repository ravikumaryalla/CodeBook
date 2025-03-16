import classes from "./Home.module.css";
import Hero from "./components/hero/Hero";
import Featured from "./components/featured/Featured";
import Testimonials from "./components/testimonials/Testimonials";
import Faq from "./components/faq/Faq";
const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <Hero />
      <Featured />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
