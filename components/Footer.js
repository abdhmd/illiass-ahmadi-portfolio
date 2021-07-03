import { Box, Container, Flex, Link, Heading } from "@theme-ui/components";
import { Logo } from "../data/data";
import { navMenu } from "../data/data";

const dt = new Date();
const date = dt.getFullYear();

const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        pt: 5,
        pb : 4
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Link href="/">
            <Logo w={30} h={30} />
          </Link>
        </Box>
        <Heading
          as="h3"
          variant="styles.h3"
          sx={{
            mt: 3,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          abdelhamid boudiba | {date}
        </Heading>
        <Box
          as="ul"
          sx={{
            display: ["none", "flex"],
            listStyle: "none",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            p: 0,
            mt : 3
          }}
        >
          {navMenu.map((item) => {
            return (
              <Box as="li" key={item.path}>
                <Link
                  href={`#${item.path}`}
                  sx={{
                    color: "text",
                    fontSize: 2,
                    fontWeight : "medium",
                    textTransform: "uppercase",
                    opacity : "60%"
                  }}
                >
                  {item.name}
                </Link>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
