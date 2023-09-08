import { Routes, Route } from "react-router-dom";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Header from "./components/header/Header";
import Partner from "./routes/partner/Partner";
import ProductView from "./routes/productView/ProductView";
import Footer from "./components/footer/Footer";
import MainCaterogy from "./components/mainCaterogy/MainCaterogy";
import SubCategory from "./components/subcategory/Subcategory";
import Sidebar from "../src/components/sidebar/Sidebar";
function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/maincategory/:categoryname" element={<MainCaterogy />} />
        <Route path="/subcategory/:categoryname" element={<SubCategory />} />
        <Route path="/productView/:id" element={<ProductView />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
