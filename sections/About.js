import {
  Box,
  Container,
  Text,
  Flex,
  Image,
  Button,
  Link,
  Heading,
} from "@theme-ui/components";
import SectionHeadline from "../components/SectionHeadline";

const About = () => {
  return (
    <Box
      as="section"
      id="about"
      variant="styles.section"
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <SectionHeadline title="about me" />
      <Container>
        <Flex
          as="div"
          sx={{
            flexDirection: ["column", "column", "row"],
            justifyContent: "space-between",
            alignItems: ["center", "center", "flex-start"],
            gap: [4, 5, 6],
          }}
        >
          <Box
            as="div"
            sx={{
              overflow: "hidden",
              width: "50%",
              width: ["120px", "180px", "240px"],
              height: ["120px", "180px", "240px"],
              borderRadius: "100%",
              border: "4px solid white",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              zIndex: "10",
            }}
          >
            <Image src="photo.jpg" sx={{ height: "100%",width : "100%" }} />
          </Box>
          <Box
            as="div"
            sx={{
              textAlign: ["center", "center", "left"],
              width: "80%",
            }}
          >
            <Heading
              as="h3"
              variant="styles.h3"
              sx={{
                textTransform: "capitalize",
                mb: 3,
              }}
            >
              i'm{" "}
              <Box as="span" sx={{ color: "primary" }}>
                iliass ahmadi
              </Box>
            </Heading>
            <Text as="p" variant="styles.p">
              Frontend developer with extensive experience,I create successful
              websites that are fast, easy to use, and built with best
              practices. I work to make a better web; one that is fast, easy to
              use, beautiful, accessible to all.
              <br />
              <br />I use the latest technologies to produce responsive
              websites and web apps that provide users the best and most
              appropriate experience suited to their device and browser.
            </Text>
            <Button
              sx={{
                mt: [4, 5],
              }}
            >
              <Link
                href="#"
                target="_"
                sx={{
                  color: "background",
                }}
              >
                my resume
              </Link>
            </Button>
          </Box>
        </Flex>
      </Container>

      <Box
        sx={{
          bg: "primary",
          position: "absolute",
          display: ["none", "none", "none", "block"],
          width: "600px",
          height: "220px",
          left: "-200px",
          top: "320px",
          borderTopRightRadius: "40px",
          borderBottomRightRadius: "40px",
          transform: "rotate(-25deg)",
        }}
      ></Box>
    </Box>
  );
};

export default About;
