import { Route, Routes, useLocation } from "react-router-dom";

import { useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage/Homepage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/furniture" element={<CatalogPage type="furniture" />} />
        <Route path="/villagers" element={<CatalogPage type="villagers" />} />
        <Route path="/bugs" element={<CatalogPage type="bugs" />} />
        <Route path="/fish" element={<CatalogPage type="fish" />} />
        <Route path="/art" element={<CatalogPage type="art" />} />
      </Routes>
      <Footer />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
