import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import PersonalForm from './pages/PersonalForm.jsx';
import OnlineForm from './pages/OnlineForm.jsx';
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/personal-trainer-website/">
      <Navbar />

      <Routes>
        {/* Route για τη σελίδα φόρμας */}
        <Route path="/personal-form" element={<PersonalForm />} />
        <Route path="/online-form" element={<OnlineForm />} />
        {/* Όλα τα υπόλοιπα στο single-page App */}
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
