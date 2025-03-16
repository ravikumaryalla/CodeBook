import classes from "./Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerLeft}>
        <p>© 2030 CodeBook. All Rights Reserved.</p>
      </div>
      <div className={classes.footerRight}>
        <GitHubIcon />
        <LinkedInIcon />
        <XIcon />
      </div>
    </div>
  );
};

export default Footer;
