import './App.css';
import { Routes, Route } from 'react-router-dom';
import TrackShipment from './pages/TrackShipment';
import { useEffect } from 'react';
import i18next from 'i18next';

function App() {
  const lastSelectedLanguage: string =
    localStorage.getItem('i18nextLng') || 'e';
  i18next.changeLanguage(lastSelectedLanguage);
  const handleLanguageChange = () => {
    localStorage.setItem('i18nextLng', i18next.language);
    document.body.dir = i18next.language === 'ar' ? 'rtl' : 'ltr';
  };
  useEffect(() => {
    handleLanguageChange();
    i18next.on('languageChanged', handleLanguageChange);
    // remove event listener when component unmounts
    return () => {
      i18next.off('languageChanged', handleLanguageChange);
    };
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<TrackShipment />} />
      </Routes>
    </>
  );
}

export default App;
