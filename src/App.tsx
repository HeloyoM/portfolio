import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import LanguageToggleButton from './components/LanguageToggleButton';
import WhatsappButton from './components/WhatsappButton';
import Header from './components/header/Header';
import Menu from './components/menu';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Header />

            <Menu />

            {/* <GuestContactUs /> */}

            <Footer />

            <LanguageToggleButton />
            <WhatsappButton /></>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
