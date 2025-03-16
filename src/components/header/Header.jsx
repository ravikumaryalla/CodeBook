import classes from "./Header.module.css";
import LogoIcon from "../../assets/logo";
import Switch from "../custuom-design/Switch";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const handleThemeChange = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      if (newDarkMode) {
        console.log("setting dark mode");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        console.log("setting light mode");
        document.documentElement.setAttribute("data-theme", "light");
      }
      return newDarkMode;
    });
  };

  return (
    <div className={classes.header}>
      <div className={classes.headerLeft}>
        <LogoIcon
          sx={{
            width: "2.5rem",
            height: "2.5rem",
            color: "var(--text-color)",
          }}
        />
        <h3>Book Box</h3>
      </div>
      <div className={classes.headerRight}>
        {console.log(darkMode, "darkMode")}
        <Switch
          checked={darkMode}
          onChange={handleThemeChange}
          currentTheme={darkMode}
        />

        <div className={classes.searchWrapper}>
          <TextField
            variant="outlined"
            size="small"
            sx={{
              "& .MuiInputBase-root": {
                caretColor: "var(--text-color)",
                height: "2rem",

                "& fieldset": {
                  border: "2px solid var(--text-color)",
                },

                "&.Mui-focused fieldset": {
                  border: "3px solid var(--text-color)",
                },
                "&:hover fieldset": {
                  border: "2px solid var(--text-color)",
                },
              },
            }}
            style={{
              display: openSearch ? "block" : "none",
            }}
          />
          <SearchIcon
            sx={{
              color: "var(--text-color)",
              width: "2rem",
              height: "2rem",
              cursor: "pointer",
            }}
            onClick={() => setOpenSearch(!openSearch)}
            style={{
              position: "absolute",
              top: "0rem",
              right: "0rem",
            }}
          />
        </div>
        <div className={classes.cartWrapper}>
          <ShoppingCartIcon
            sx={{
              color: "var(--text-color)",
              width: "2rem",
              height: "2rem",
              cursor: "pointer",
            }}
          />
          <div className={classes.cartCount}>0</div>
        </div>

        <AccountCircleIcon
          sx={{
            color: "var(--text-color)",
            width: "2rem",
            height: "2rem",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
