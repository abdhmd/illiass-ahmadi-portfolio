import { Box, Heading, Text } from "@theme-ui/components";

const SectionHeadline = ({ title }) => {
  return (
    <Box sx={styles.box}>
      <Text sx={styles.text}>{title}</Text>
      <Heading as="h2" sx={styles.h2}>
        {title}
      </Heading>
    </Box>
  );
};

export default SectionHeadline;

const styles = {
  box: {
    position: "relative",
    mb: [5,7],
    textAlign: "center",
    textTransform: "uppercase",
  },

  text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: ["40px", "80px"],
    fontWeight: "bold",
    opacity: "0.05",
    width: "100%",
  },

  h2: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: [4, 5],
  },
};
