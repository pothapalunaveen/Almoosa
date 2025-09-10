import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from './components/Footer';
import Header from './components/Header';
import BookAppointments from "./components/BookAppointments";


function App() {
  return (
    <>
    {/* <Footer/> */}
   
    <Router>
       <Header/>
       <Routes>
         <Route path="/book-appointments" element={<BookAppointments />} />
       </Routes>
     
    </Router>
      </>

    
     
    
  );
}

export default App;
