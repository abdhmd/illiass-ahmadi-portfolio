import {
  Box,
  Container,
  Grid,
  Flex,
  Image,
  Heading,
  Text,
} from "@theme-ui/components";
import { GrGithub } from "react-icons/gr";
import { BiLink } from "react-icons/bi";
import Link from "next/link";

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;
  const res = await fetch(`https://api.npoint.io/708ee64e7625d147767f/${slug}`);
  const data = await res.json();

  return {
    props: { data },
  };
};

const work = ({ data }) => {
  const {
    name,
    description,
    view_website,
    source_code,
    images,
    skills,
    create_date,
  } = data;

  return (
    <Box
      as="section"
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={styles.backBox}>
        <Link href="/#portfolio">
          <Text as="a" sx={styles.backLink}>
            back to home
          </Text>
        </Link>
      </Box>
      <Container sx={styles.container}>
        <Heading as="h1" sx={styles.h1}>
          {name}
        </Heading>
        <Image src={images.cover} sx={styles.image} />
        <Grid
          gap={[3, 5]}
          columns={[1, 2]}
          sx={{
            p: 4,
            borderRadius: "8px",
            boxShadow: "0 5px 30px rgba(97, 69, 238, 0.1)",
          }}
        >
          <Box>
            <Heading as="h3" variant="styles.h3" sx={styles.title}>
              description
            </Heading>
            <Text as="p" variant="styles.p">
              {description}
            </Text>
          </Box>
          <Box as="ul" sx={{ p: "0", listStyle: "none" }}>
            <Heading as="h3" variant="styles.h3" sx={styles.title}>
              skills used
            </Heading>

            {skills.map((skill, i) => (
              <Text
                as="li"
                key={i}
                variant="styles.p"
                sx={{
                  textTransform: "uppercase",
                }}
              >
                {skill}
              </Text>
            ))}
          </Box>
        </Grid>
        <Image src={images.view} sx={styles.image} />
        <Flex sx={styles.linksBox}>
          <Heading
            as="h3"
            sx={{
              color: "white",
              mb: "0",
              textAlign: "center",
              lineHeight  : "140%"
            }}
            variant="styles.h3"
          >
            Take a look at{" "}
            <Box as="span" sx={{ textTransform: "uppercase" }}>
              {name}
            </Box>
          </Heading>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: [3, 0],
              gap: 2,
            }}
          >
            <Link href={source_code}>
              <a target="_">
                <Box sx={styles.icon}>
                  <GrGithub />
                </Box>
              </a>
            </Link>
            <Link href={view_website}>
              <a target="_">
                <Box sx={styles.icon}>
                  <BiLink />
                </Box>
              </a>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default work;

const styles = {
  backBox: {
    textDecoration: " none",
    bg: "white",
    px: 3,
    py: 2,
    m: 2,
    position: "fixed",
    borderRadius: "8px",
    boxShadow: "0 5px 30px rgba(97, 69, 238, 0.1)",
    zIndex: "999",
    cursor: "pointer",
  },

  backLink: {
    color: "primary",
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: "14px",
    textDecoration: "none",
    opacity: "70%",
  },

  container: {
    my: 6,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: [4, 5],
  },

  h1: {
    fontSize: [5, 7, 8],
    fontWeight: "bold",
    textTransform: "uppercase",
    mb: 3,
  },
  image: {
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 5px 30px rgba(97, 69, 238, 0.1)",
  },
  title: {
    textTransform: "capitalize",
    mb: 3,
  },

  linksBox: {
    width: "100%",
    flexDirection: ["column", "row"],
    justifyContent: "space-between",
    alignItems: "center",
    p: 4,
    bg: "primary",
    borderRadius: "8px",
    boxShadow: "0 5px 30px rgba(97, 69, 238, 0.1)",
  },

  icon: {
    width: "40px",
    height: "40px",
    bg: "background",
    color: "primary",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 2,
    cursor: "pointer",
  },
};
