import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Layout from "../components/Layout";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Hero />
        <Skills />
        <About />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}
