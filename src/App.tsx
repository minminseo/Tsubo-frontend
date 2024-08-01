import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import Contact from './components/Contact';
import Caution from './components/Caution';


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="d-flex vh-100">
        <SideBar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        {!isSidebarOpen && (
          <button 
            className="btn btn-primary position-absolute"
            style={{ fontSize: '2rem' }}
            onClick={toggleSidebar}
          >
            開くボタン
          </button>
        )}
        <div className="flex-grow-1 d-flex flex-column">
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/caution" element={<Caution />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;