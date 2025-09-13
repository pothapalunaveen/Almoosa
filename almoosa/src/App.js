import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './i18n';
import Footer from './components/Footer';
import Header from './components/Header';
import BookAppointments from "./components/BookAppointments";
import TopBar from './components/TopBar';
import Login from './components/Login';



function AppContent() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };
  const isBookPage = location.pathname === "/book-appointments";
  return (
    <>
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      {!isBookPage && <TopBar />}
      {!isBookPage && <Header />}
  
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/book-appointments" element={ <BookAppointments /> } />
          </Routes>
          {!isBookPage && <Footer />}

          {/*  <Login /> */}
          

        
      </div>
    </>




  );
}
function App() {
  const { t, i18n } = useTranslation();
  return (
     <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
    <Router>
      <AppContent />
    </Router>
    </div>
  );
}

export default App;
