import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import ProjectPage from './components/ProjectPage/ProjectPage'
import { IntlProvider } from "react-intl"
import { LOCALES } from "./i18n/locales.js"
import { messages } from "./i18n/messages.js"
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer';

function App() {
  const locale = LOCALES.ENGLISH
  const [currentLocale, setCurrentLocale] = React.useState(locale);
  return (
    <IntlProvider messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}>
      <Navbar currentLocale={currentLocale} setLocale={setCurrentLocale} />
      <Routes>
        <Route path="/bratva-website" element={<Home currentLocale={currentLocale} setLocale={setCurrentLocale} />} />
        <Route path='/:projectId' element={<ProjectPage />} />
      </Routes>
      <Footer />
    </IntlProvider>
  );
}

export default App;
