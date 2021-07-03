import { Box, Container, Text, Flex, Image,Button,Link ,Heading} from "@theme-ui/components";
import SectionHeadline from "../components/SectionHeadline";

const link = "https://drive.google.com/file/d/18kbHG3XEJXpUP9J-EFp95Y9HaplWQOWA/view"

const About = () => {
  return (
    <Box as="section" id="about" variant="styles.section"  sx={{
        position : "relative",
        overflow : "hidden"
    }}>
      <SectionHeadline title="about me" />
      <Container>
        <Flex as="div" sx={{
            flexDirection : ["column","column","row"],
            justifyContent : "space-between",
            alignItems : ["center","center","flex-start"],
            gap :[4,5,6]
        }}>
          <Box as="div" sx={{
              overflow : "hidden",
              width : "50%",
              width :["120px","180px","250px"],
              height : ["120px","180px","250px"],
              borderRadius : "100%",
              border : "4px solid white",
              boxShadow : "0px 20px 40px rgba(0,0,0,0.2)",
              zIndex : "10"
          }}>
            <Image src="photo.png" sx={{height : "100%"}} />
          </Box>
          <Box as="div" sx={{
              textAlign : ['center',"center","left"],
              width : "80%",
          }}>
              <Heading as="h3"  variant="styles.h3" sx={{
                  textTransform : "capitalize",
                  mb :  3
              }}>
                  i'm <Box as="span" sx={{color:"primary"}}>abdelhamid boudiba</Box>
              </Heading>
            <Text as="p" variant="styles.p">
              Frontend developer with 5 years experience,I create successful
              websites that are fast, easy to use, and built with best
              practices. I work to make a better web; one that is fast, easy to
              use, beautiful, accessible to all.
              <br />
              <br />I use HTML, CSS, and JavaScript to produce responsive
              websites and web apps that provide users the best and most
              appropriate experience suited to their device and browser. I have
              a special interest in use of animation on the web. I particularly
              like working on websites that have seamless transitions and
              require high-level performance to maintain a smooth and appealing
              website.
            </Text>
            <Button sx={{
                mt: [4,5]
            }}><Link href={link} target="_" sx={{
                color:"background"
            }}>download cv</Link></Button>
          </Box>
        </Flex>
      </Container>

      <Box sx={{
          bg: "primary",
          position : "absolute",
          display : ["none","none","none","block"],
          width : "600px",
          height : "260px",
          left : "-200px",
          top : "340px",
          borderTopRightRadius: "40px",
          borderBottomRightRadius: "40px",
          transform : "rotate(-25deg)"

      }}></Box>
    </Box>
  );
};

export default About;
