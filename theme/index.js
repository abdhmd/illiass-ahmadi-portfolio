// example theme.js
export default {
  space: [0, 4, 8, 16, 32, 64, 80, 96, 128, 160, 200],
  fonts: {
    body: "'Saira', sans-serif",
    heading: "'Saira', sans-serif",
  },
  fontSizes: [14, 16, 18, 20, 24, 36, 48, 64, 96, 144],
  fontWeights: {
    body: 400,
    medium: 500,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1,
  },
  colors: {
    text: "#121212",
    background: "#fff",
    primary: "#6245ee",
    primaryDark: "#472dcc",
  },
  buttons: {
    primary: {
      color: "background",
      fontFamily: "body",
      bg: "primary",
      fontWeight: "heading",
      fontSize: [1, 2, 3],
      textTransform: "uppercase",
      borderRadius : "8px",
      px: 4,
      py: 3,
      boxShadow: "0 20px 30px rgba(97, 69, 238, 0.5)",
      transition: "ease-in 300ms all",
      "&:hover": {
        bg: "primaryDark",
      },
    },
  },
  
  layout: {
    container: {
      px: [3, 5, 7, 10],
    },
    
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },

    section  : {
      py : [5,6]
    },

    h1: {
      color: "text",
      fontFamily: "heading",
      background: "primary",
      lineHeight: "heading",
      fontWeight: "heading",
      textTransform: "uppercase",
      fontSize: [7, 8, 9],
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      textTransform: "uppercase",
      fontSize: [4, 5, 6],
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [3,4]
    },
    
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: [2, 3],
      opacity: "70%",
    },

    li: {
      listStyle: "none",
    },
    a: {
      textDecoration: "none",
    },

    img: {
      maxWidth: "100%",
    },
  },
};
