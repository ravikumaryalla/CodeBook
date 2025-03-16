import React from "react";
import { hero } from "../../../../assets";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.heroSection}>
      <div className={classes.heroSectonTextContainer}>
        <h1
          style={{
            alignSelf: "flex-start",
          }}
        >
          The Ultimate eBook Store
        </h1>
        <h2>
          CodeBook is the world's most popular and authoritative source for
          computer science ebooks. Find ratings and access to the newest books
          digitally.
        </h2>
        <button>Explore eBooks</button>
      </div>
      <img src={hero} alt="heroSection" style={{ borderRadius: "0.5rem" }} />
    </div>
  );
};

export default Hero;
