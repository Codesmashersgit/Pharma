import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import ShopPage from "./pages/ShopPage";
import DownloadSection from "./pages/DownloadSection";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage"; 
import ForumPage from "./pages/ForumPage"; 
import DoctorPage from "./pages/DoctorPage";
import ContactPage from "./pages/ContactPage";
import LabPage from "./pages/LabPage";
import Productpage from "./pages/Productpage"
// import { products } from "./data/data";


function App() {
  return (
    <Router>
      <div className="bg-[#FFF7E2]">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/lab" element={<LabPage />} />
          <Route path="/shop" element={<ShopPage />} />
           <Route path="/forum" element={<ForumPage />} />
           <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<Productpage />} />

        </Routes>
        <DownloadSection />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
