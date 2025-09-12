import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './i18n';
import Footer from './components/Footer';
import Header from './components/Header';
import BookAppointments from "./components/BookAppointments";
import TopBar from './components/TopBar';


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.dir = lng === 'Ar' ? 'rtl' : 'ltr';
  };
  return (
    <>
    {/* <Footer/> */}
   
    <Router>
      <TopBar/>
       <Header/>
       
       <Routes>
         <Route path="/book-appointments" element={<BookAppointments />} />
       </Routes>
     
    </Router>
      </>

    
     
    
  );
}

export default App;
