import Layout from "../components/Layout";
import { Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
  return (
    <Layout>
      <Container className="main-container">
        <Box className="context-box">
          <Typography className="context">Emre Şahin</Typography>
          <Typography className="context-body">Front-end Developer</Typography>
        </Box>
        <Box className="body-box">
          <Box className="icon-box">
            <a href="https://github.com/EmreSahin60">
              <GitHubIcon className="icon" />
            </a>
          </Box>

          <Box className="icon-box">
            <a href="https://www.linkedin.com/in/emre-şahin-617674208/">
              <LinkedInIcon className="icon" />
            </a>
          </Box>
          <Box className="icon-box">
            <a href="https://www.instagram.com/emrshn/">
              <InstagramIcon className="icon" />
            </a>
          </Box>
          <Box className="icon-box">
            <a href="https://twitter.com/MoturAlpha">
              <TwitterIcon className="icon" />
            </a>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};
export default Home;
