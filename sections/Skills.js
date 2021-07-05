import { Box, Container,  Grid, Flex } from "@theme-ui/components";
import SectionHeadline from "../components/SectionHeadline";
import { skillsData } from "../data/data";
const Skills = () => {
  return (
    <Box as="section" id="skills" variant="styles.section">
      <SectionHeadline title={"my skills"} />
      <Container>
        <Grid   columns={[1, 2]} sx={{
          columnGap : [3,3,5],
          rowGap : 4
        }}>
          {skillsData.map((skill) => (
            <Flex
              key={skill.id}
              sx={{
                flexDirection: "column",
              }}
            >
              <Box
                as="div"
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: "medium",
                  textTransform: "uppercase",
                  opacity: "60%",
                }}
              >
                <Box as="span">{skill.skill}</Box>
                <Box as="span">{skill.rate}</Box>
              </Box>
              <Box
                as="div"
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "10px",
                  bg: "rgba(0,0,0,0.06)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  marginTop: 2,
                }}
              >
                <Box
                  as="span"
                  sx={{
                    display: "block",
                    width: `${skill.rate}`,
                    height: "100%",
                    borderRadius: "20px",
                    bg: "primary",
                  }}
                ></Box>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
