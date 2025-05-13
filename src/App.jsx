import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CallForPapers from "./pages/CallForPapers";
import About from "./pages/About";
import ContactSection from "./pages/ContactSection";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import OrganizingCommittee from "./pages/OrganizingCommite";
import TechnicalSession from "./pages/TechnicalSession";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Toast notifications: */}
      <Toaster position="top-right" />
      <ToastContainer position="top-right" autoClose={4000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactSection />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/organizing-committee" element={<OrganizingCommittee />} />
        <Route path="/technical-session" element={<TechnicalSession />} />

        {/* Protected Dashboard route: */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
