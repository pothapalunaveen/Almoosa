import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BookAppointments } from "./components/BookAppointments";
import TopBar from "./components/TopBar";
import Login from "./components/Login";
import { useEffect } from "react";
import Almoosa from "./components/Almoosa";
import Service from "./components/Service";
import Layout from "./components/Layout";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.dir = lng === "Ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <>
      <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        {/* <Footer/>  */}

        <Router>
          <Routes>
            <Route path="/" element={<Layout />} />
          </Routes>
          <Routes>
            <Route path="/book-appointments" element={<BookAppointments />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
