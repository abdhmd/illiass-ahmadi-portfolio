import { Box, Container, Flex, Link, Text } from "@theme-ui/components";

import { Logo } from "../data/data";
import { navMenu } from "../data/data";
import { CgMenu, CgClose } from "react-icons/cg";

import { useState } from "react";

const Nav = () => {
  const [openNav, setOpenNav] = useState(true);

  const navToggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <nav>
      <Container>
        <Flex
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            py: [3,4],
          }}
        >
          <Box sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: 'center',
          }}>
            <Link href="/">
              <Logo w={30} h={30} />
            </Link>
          </Box>

          <Box
            onClick={() => navToggle()}
            sx={{
              display: ["block", "block", "none"],
              cursor: "pointer",
            }}
          >
            <CgMenu
              style={{
                fontSize: 30,
              }}
            ></CgMenu>
          </Box>

          <Box
            as="ul"
            sx={{
              display: ["none", "none", "flex"],
              listStyle: "none",
              mb:"10px"
            }}
          >
            {navMenu.map((item) => {
              return (
                <Box as="li" key={item.path}>
                  <Link href={`#${item.path}`} sx={styles.linkDesk}>
                    {item.name}
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Flex>
      </Container>
      <Box
        sx={styles.navMobile}
        style={{ height: `${openNav ? "0" : "100vh"}` }}
      >
        <Container>
          <Flex
            as="ul"
            sx={{
              listStyle: "none",
              flexDirection: "column",
              p: 0,
            }}
          >
            {navMenu.map((item) => {
              return (
                <Box
                  as="li"
                  key={item.path}
                  sx={{
                    my: 1,
                  }}
                >
                  <Link
                    href={`#${item.path}`}
                    sx={styles.link}
                    onClick={() => navToggle()}
                  >
                    {item.name}
                  </Link>
                </Box>
              );
            })}

            <Box sx={styles.close} onClick={() => navToggle()}>
              <CgClose
                style={{
                  fontSize: 30,
                  color: "white",
                }}
              ></CgClose>
            </Box>
          </Flex>
        </Container>
      </Box>
    </nav>
  );
};

export default Nav;

const styles = {
  navMobile: {
    bg: "text",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: "999",
    overflow: "hidden",
    transition: "ease-in 300ms all",
  },
  link: {
    color: "background",
    textTransform: "uppercase",
    fontSize: 2,
    fontWeight: "medium",
    transition: "ease-in 300ms all",
    opacity: "80%",

    "&:hover": {
      color: "primary",
    },
  },


 

  linkDesk: {
    color: "text",
    textTransform: "uppercase",
    fontSize: 1,
    fontWeight: "medium",
    transition: "ease-in 300ms all",
    opacity: "80%",
    ml : 4,

    "&:hover": {
      color: "primary",
    },
  },

  close: {
    position: "absolute",
    top: 2,
    right: 2,
    cursor: "pointer",
  },
};
