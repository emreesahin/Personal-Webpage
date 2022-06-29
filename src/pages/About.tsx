import { Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import Photo from "../assets/images/EmreSahinPhoto.png";
import Layout from "../components/Layout";

const About = () => {
  return (
    <>
      <Layout>
        <Container className="container-about">
          <Box className="box-about">
            <Box className="photo-box-about">
              <img src={Photo} alt=" " className="photo-about" />
            </Box>
            <Box className="body-box-about">
              <Typography className="title-text-about">ABOUT ME</Typography>
              <Typography className="body-text-about">
                Hello my name is Emre Şahin and I am studying Computer
                Engineering at Alanya Alaaddin Keykubat University. I am
                interested in web and mobile developement. I am improving myself
                in JavaScript, React.js and Vue.js
              </Typography>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  );
};
export default About;
