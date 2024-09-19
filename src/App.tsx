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
  const [language, setLanguage] = useState(i18n.language); // 言語をの状態を管理する状態変数

  // サイドバーを開閉する関数
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 言語を変更する関数
  /*
  Settingコンポーネントで配置された言語選択ボタンをクリックすると、
  changeLanguage関数(引数に”ja”か”ko”が渡される)が実行され、
  i18n.changeLanguage関数が呼び出され、引数に基づいて言語が変更される。
  */
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
