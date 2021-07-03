import {
  Box,
  Container,
  Button,
  Heading,
  Text,
  Link,
  Image,
} from "@theme-ui/components";
import { jsx } from "theme-ui";
import Nav from "../components/Nav";

const Hero = () => {
  return (
    <Box
      as="section"
      sx={styles.hero}
      id="home"
      sx={{ position: "relative", minHeight: "100vh" }}
    >
      <Nav />
      <Container sx={styles.container}>
        <Text as="p" variant={styles.p} sx={styles.text}>
          hi i'm abdelhamid boudiba
        </Text>
        <Heading as="h1" sx={styles.h1}>
          frontend <br />
          developer
        </Heading>
        <Box>
          <Button
            sx={{
              mt: 4,
            }}
          >
            <Link
              href="#contact"
              sx={{
                color: "background",
              }}
            >
              hire me
            </Link>
          </Button>
        </Box>
      </Container>
      <Box sx={styles.image}>
        <Image src="/SVG.svg" />
      </Box>
    </Box>
  );
};

export default Hero;

const styles = {
  container: {
    display: "flex",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: ["center", "center", "left"],
    flexDirection: "column",
  },

  text: {
    fontSize: [3, 4, 5],
    fontWeight: "medium",
    textTransform: "capitalize",
    opacity: "70%",
  },

  h1: {
    fontSize: [6, 7, 8],
    fontWeight: "bold",
    textTransform: "uppercase",
    mt: 2,
  },

  image: {
    display: ["none", "none", "block"],
    position: "absolute",
    bottom: "0px",
    right: "0px",
    width: [0, 0, 280, 380],
    height: [0, 0, 280, 380],
  },
};
