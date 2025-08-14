import './App.css';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import GuestContactUs from './locales/ContactUs';
import LanguageToggleButton from './components/LanguageToggleButton';
import WhatsappButton from './components/WhatsappButton';
import Header from './components/header/Header';
import Menu from './components/menu';

function App() {

  const { t } = useTranslation();

  return (
    <>
      <Header />

      <Menu />

      <GuestContactUs />

      <Footer />

      <LanguageToggleButton />
      <WhatsappButton />
    </>);
}

export default App;
