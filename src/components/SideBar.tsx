import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, AlertCircle, Mail, Menu } from 'lucide-react';

interface Props {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const SideBar = ({ isSidebarOpen, toggleSidebar }: Props) => {
    return (
        <div className={`sidebar bg-success text-white ${isSidebarOpen ? 'open' : ''}`}
        style={{
            
            width: isSidebarOpen ? '14%' : '0%',
            transition: 'width 0.3s ease-in-out',
            overflow: 'hidden'
        }}>
            <div className="p-3" style={{
                opacity: isSidebarOpen ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
            }}>
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <button className="btn btn-outline-light" onClick={toggleSidebar} style={{ border: 'none' }}>
                        <Menu />
                    </button>
                    <h2 className="mb-0 display-6">メニュー</h2>
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/" className="btn btn-outline-light d-flex justify-content-start align-items-center py-1 fw-bold" style={{ fontSize: '1.5rem', border: 'none' }}>
                            <MessageCircle className="m-2"/>チャット画面
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/caution" className="btn btn-outline-light d-flex justify-content-start align-items-center py-1 fw-bold" style={{ fontSize: '1.5rem', border: 'none' }}>
                            <AlertCircle className="m-2"/>使用上の注意
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="btn btn-outline-light d-flex justify-content-start align-items-center py-1 fw-bold" style={{ fontSize: '1.5rem', border: 'none' }}>
                            <Mail className="m-2"/>問い合わせ
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;