import {
  Box,
  Container,
  Grid,
  Image,
  Heading,
  Text,
} from "@theme-ui/components";

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
  const { name, images } = data;

  return (
    <Box as="section" variant="styles.section">
      <Box
        sx={{
          textDecoration: " none",
          bg: "white",
          px: 3,
          py: 2,
          m: 2,
          position: "fixed",
          borderRadius: "8px",
          boxShadow: "0 5px 30px rgba(97, 69, 238, 0.1)",
          zIndex: "999",
        }}
      >
        <Link href="/#portfolio">
          <a
            style={{
              fontFamily: "'Saira', sans-serif",
              color: "#121212",
              textTransform: "capitalize",
              fontWeight: "500",
              fontSize: "14px",
              textDecoration: "none",
              opacity: "70%",
            }}
          >
            back to home
          </a>
        </Link>
      </Box>
      <Container>
        <Heading as="h1" variant="styles.h1">
          {name}
        </Heading>
        <Image src={images.view} />
      </Container>
    </Box>
  );
};

export default work;
