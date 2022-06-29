import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/images/EmreSahinLogo.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  return (
    <div className="footer-body">
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Link to="/">
              <img src={logo} alt=" " className="footer-logo" width="250px" />
            </Link>
          </Grid>

          <Grid item xs={4}>
            <Typography align="center" className="footer-title">
              ABOUT
            </Typography>
            <Typography align="center" className="footer-text">
              This page was created by Emre Şahin to improve his coding skills
              and share his projects.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography align="center" className="footer-title">
              CONTACTS
            </Typography>

            <Typography align="center" className="footer-text">
              <EmailOutlinedIcon sx={{ mt: 1 }} /> emre.113@hotmail.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              align="center"
              variant="body2"
              gutterBottom
              className="footer-text"
            >
              Copyrighted &copy; by Emre Şahin
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
