import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './i18n';
import Footer from './components/Footer';
import Header from './components/Header';
import { BookAppointments } from "./components/BookAppointments";
import TopBar from './components/TopBar';
import Login from './components/Login';
import { useEffect } from 'react';
import Almoosa from './components/Almoosa';
import Service from './components/Service';
import Leadership from './components/Leadership';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.dir = lng === 'Ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);
  return (
    <>
      <div dir={i18n.language === 'ar' ? "rtl" : "ltr"}>
        {/* <Footer/>  */}

        <Router>
          {/* <TopBar />
          <Header /> */}




          <Routes>
            <Route path="/book-appointments" element={<BookAppointments />} />
            <Route path='/Leadership' element={<Leadership />} />

          </Routes>
          {/* <Login/>   */}
          {/* <Almoosa />

          <Service />
          <Footer /> */}

        
        </Router>
      </div>
    </>





  );
}

export default App;
