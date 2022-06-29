import { Button, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/images/EmreSahinLogo.png";

const Header = () => {
  return (
    <div className="header-body">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Link to="/">
              <Button>
                <img src={logo} alt="" className="logo" width="250px" />
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <nav>
              <Link to="/about" className="header-text">
                <Button sx={{ color: "#ffffff" }}>
                  <h2>About</h2>
                </Button>
              </Link>
              <Link to="/under-construction" className="header-text">
                <Button sx={{ color: "#ffffff" }}>
                  <h2>Contact</h2>
                </Button>
              </Link>
              <Link to="/under-construction" className="header-text">
                <Button sx={{ color: "#ffffff" }}>
                  <h2>Project</h2>
                </Button>
              </Link>
            </nav>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Header;
