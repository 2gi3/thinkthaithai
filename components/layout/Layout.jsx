import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";


const Layout = ({ children }) => {
    return (
      <div>
        <NavBar />
        {children}
        <Footer />
      </div>
    );
  };
  
  export default Layout;