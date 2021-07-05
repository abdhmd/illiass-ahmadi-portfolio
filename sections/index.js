import { Box, Container, Grid, Image } from "@theme-ui/components";
import SectionHeadline from "../components/SectionHeadline";
import Link from "next/link";

const Portfolio = ({ data }) => {
  return (
    <Box as="section" id="portfolio" variant="styles.section">
      <SectionHeadline title="portfolio" />
      <Container>
        <Grid gap={3} columns={[1, 2]}>
          {data.map((work, i) => (
            <Link
              key={i}
              href={{
                pathname: `/works/[slug]`,
              }}
              as={`/works/${i}`}
            >
              <Image
                src={work.images.cover}
                variant="styles.img"
                sx={styles.boxImage}
              />
            </Link>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;

const styles = {
  boxImage: {
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 5px 30px rgba(97, 69, 238, 0.1)",
    cursor: "pointer",
  },
};
