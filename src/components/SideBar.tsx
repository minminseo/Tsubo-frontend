import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface Props {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const SideBar = ({ isSidebarOpen, toggleSidebar }: Props) => {
    return (
        <div className={`sidebar bg-success text-white ${isSidebarOpen ? 'open' : ''}`} style={{
            width: isSidebarOpen ? '500px' : '0px',
            transition: 'width 0.3s ease-in-out',
            overflow: 'hidden'
        }}>
            <div className="p-5" style={{
                opacity: isSidebarOpen ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
                width: '500px'
            }}>
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <h2 className="mb-0 display-4">メニュー</h2>
                    <button className="btn btn-outline-light" onClick={toggleSidebar}>
                        <X size={48} />
                    </button>
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item mb-4">
                        <Link to="/" className="btn btn-outline-light w-100 text-start py-4 fs-1 fw-bold">
                            チャット画面
                        </Link>
                    </li>
                    <li className="nav-item mb-4">
                        <Link to="/caution" className="btn btn-outline-light w-100 text-start py-4 fs-1 fw-bold">
                            使用上の注意
                        </Link>
                    </li>
                    <li className="nav-item mb-4">
                        <Link to="/contact" className="btn btn-outline-light w-100 text-start py-4 fs-1 fw-bold">
                            問い合わせ
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;