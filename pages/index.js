import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Layout from "../components/Layout";
import Hero from "../sections/Hero";
import Portfolio from "../sections";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Contact from "../sections/Contact";

export async function getServerSideProps() {
  const res = await fetch(`https://api.npoint.io/708ee64e7625d147767f`);
  const data = await res.json();
  return {
    props: {
      works: data,
    },
  };
}

export default function Home({ works }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Hero />
        <Portfolio data={works} />
        <Skills />
        <About />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}
