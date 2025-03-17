import React from "react";
import classes from "./Filters.module.css";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const Filters = ({ onClose = () => {} }) => {
  return (
    <div className={classes.filters}>
      <div className={classes.headerContainer}>
        <div className={classes.header}>
          <div className={classes.headerLeft}>FILTERS</div>

          <div className={classes.headerRight}>
            <CloseIcon sx={{ cursor: "pointer" }} onClick={onClose} />
          </div>
        </div>
        <hr />
      </div>

      <div className={classes.filterRadioContainer}>
        <div className={classes.filterh1}>Sort By</div>
        <RadioGroup>
          <Radio
            value="price-lowtohigh"
            label="Price - Low to High"
            sx={{
              "& .MuiRadio-label": {
                fontSize: "0.8rem",
                color: "var(--text-color)",
              },
            }}
          />
          <Radio
            value="price-hightolow"
            label="Price - High to Low"
            sx={{
              "& .MuiRadio-label": {
                fontSize: "0.8rem",
                color: "var(--text-color)",
              },
            }}
          />
        </RadioGroup>
      </div>

      <div className={classes.filterRadioContainer}>
        <div className={classes.filterh1}>Ratings</div>
        <RadioGroup>
          <Radio
            value="ratingFourAndAbove"
            label="4 Stars & Above"
            sx={{
              "& .MuiRadio-label": {
                fontSize: "0.8rem",
                color: "var(--text-color)",
              },
            }}
          />
          <Radio
            value="ratingThreeAndAbove"
            label="3 Stars & Above"
            sx={{
              "& .MuiRadio-label": {
                fontSize: "0.8rem",
                color: "var(--text-color)",
              },
            }}
          />
          <Radio
            value="ratingTwoAndAbove"
            label="2 Stars & Above"
            sx={{
              "& .MuiRadio-label": {
                fontSize: "0.8rem",
                color: "var(--text-color)",
              },
            }}
          />
          <Radio
            value="ratingOneAndAbove"
            label="1 Star & Above"
            sx={{
              "& .MuiRadio-label": {
                fontSize: "0.8rem",
                color: "var(--text-color)",
              },
            }}
          />
        </RadioGroup>
      </div>
      <div className={classes.otherFilters}>
        <div className={classes.filterh1}>Other Filters</div>

        <div className={classes.filterCheckboxContainer}>
          <FormControlLabel
            sx={{
              "& .MuiTypography-root": {
                fontSize: "0.8rem",
                color: "var(--text-color)",
              },
            }}
            control={
              <Checkbox
                size="small"
                sx={{
                  color: "var(--text-color)",
                }}
              />
            }
            label="Best Seller Only"
          />
          <FormControlLabel
            sx={{
              "& .MuiTypography-root": {
                fontSize: "0.8rem",
                color: "var(--text-color)",
              },
            }}
            control={
              <Checkbox
                size="small"
                sx={{
                  color: "var(--text-color)",
                }}
              />
            }
            label="In Stock Only"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
