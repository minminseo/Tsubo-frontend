import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const SideBar = ({ isSidebarOpen, toggleSidebar }: Props) => {
    return (
        <div className={`sidebar bg-success text-white ${isSidebarOpen ? 'open' : ''}`} style={{
            width: isSidebarOpen ? '500px' : '0px',
        }}>
            <div className="p-5" style={{
                width: '500px'
            }}>
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <h2 className="mb-0 display-4">メニュー</h2>
                    <button className="btn btn-outline-light" onClick={toggleSidebar} style={{ fontSize: '2rem' }}>
                        閉じるボタン
                    </button>
                </div>
                <ul className="nav flex-column">
                    <li>
                        <Link to="/" className="btn btn-outline-light w-100 fs-1 fw-bold">
                            チャット画面
                        </Link>
                    </li>
                    <li>
                        <Link to="/caution" className="btn btn-outline-light fs-1 fw-bold">
                            使用上の注意
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="btn btn-outline-light fs-1 fw-bold">
                            問い合わせ
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;