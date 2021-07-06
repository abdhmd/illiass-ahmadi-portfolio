import Meta from "./Meta";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};

export default Layout;
