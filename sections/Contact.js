import { Box, Container, Flex, Link, Heading } from "@theme-ui/components";
import SectionHeadline from "../components/SectionHeadline";
import { contactData } from "../data/data";

const email = "sirhmd@outlook.com";

const Contact = () => {
  return (
    <Box as="section" id="contact" variant="styles.section">
      <SectionHeadline title="contact me" />
      <Container
        sx={{
          textAlign: "center",
        }}
      >
        <Box as="div">
          <Flex
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {contactData.map((item) => (
              <Box key={item.name} sx={styles.boxIcon}>
                <Link href={item.link} target="_" sx={styles.icon}>
                  <item.icon />
                </Link>
              </Box>
            ))}
          </Flex>
        </Box>
        <Box
          as="div"
          sx={{
            mt: 4,
          }}
        >
          <Heading as="h3" variant="styles.h3">
            {email}
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

const styles = {
  boxIcon: {
    bg: "background",
    width: "50px",
    height: "50px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 20px 30px rgba(97, 69, 238, 0.1)",
    cursor: "pointer",
    mx : 1,
    "&:hover" :{
      transform: "scale(1.04)",
      transition : "ease-in 300ms all"

    }
    
  },
  icon: {
    color: "primary",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 3,
  },
};
