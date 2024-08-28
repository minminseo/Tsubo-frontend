import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import Guide from './components/Guide';
import Caution from './components/Caution';
import Contact from './components/Contact';
import Setting from './components/Setting';
import i18n from './i18n';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [language, setLanguage] = useState(i18n.language);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <BrowserRouter>
      <div className="d-flex vh-100">
        <SideBar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className="flex-grow-1 d-flex flex-column">
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/caution" element={<Caution />} />
            <Route path="/contact" element={<Contact lng={language} />} />
            <Route path="/setting" element={<Setting changeLanguage={changeLanguage} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
