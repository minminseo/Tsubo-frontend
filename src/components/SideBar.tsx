import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, AlertCircle, Mail, Menu, Book } from 'lucide-react';

interface Props {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const SideBar = ({ isSidebarOpen, toggleSidebar }: Props) => {
    return (
        <div className={`sidebar bg-success text-white ${isSidebarOpen ? 'open' : ''}`}
            style={{

                width: isSidebarOpen ? '14%' : '4.8%',
                transition: 'width 0.3s ease-in-out',
                overflow: 'hidden'
            }}>
            <div className="m-3" style={{
                opacity: isSidebarOpen ? 1 : 1,
                transition: 'opacity 0.3s ease-in-out',
            }}>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-outline-light mb-5" onClick={toggleSidebar} style={{ border: 'none' }}>
                        <Menu size={35} />
                    </button>
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/" className="btn btn-outline-light d-flex justify-content-start align-items-center py-3 fw-bold"
                            style={{
                                fontSize: '1.4rem', border: 'none', whiteSpace: 'nowrap', overflow: 'hidden',
                                opacity: isSidebarOpen ? 1 : 1, transition: 'opacity 0.3s ease-in-out'
                            }}>
                            <MessageCircle size={35} />
                            {isSidebarOpen && <div className="ms-3" style={{ opacity: isSidebarOpen ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>チャット画面</div>}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/guide" className="btn btn-outline-light d-flex justify-content-start align-items-center py-3 fw-bold"
                            style={{
                                fontSize: '1.4rem', border: 'none', whiteSpace: 'nowrap', overflow: 'hidden',
                                opacity: isSidebarOpen ? 1 : 1, transition: 'opacity 0.3s ease-in-out'
                            }}>
                            <Book size={35} />
                            {isSidebarOpen && <div className="ms-3" style={{ opacity: isSidebarOpen ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>ツボの押し方</div>}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/caution" className="btn btn-outline-light d-flex justify-content-start align-items-center py-3 fw-bold"
                            style={{
                                fontSize: '1.4rem', border: 'none', whiteSpace: 'nowrap', overflow: 'hidden',
                                opacity: isSidebarOpen ? 1 : 1, transition: 'opacity 0.3s ease-in-out'
                            }}>
                            <AlertCircle size={35} />
                            {isSidebarOpen && <div className="ms-3" style={{ opacity: isSidebarOpen ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>使用上の注意</div>}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="btn btn-outline-light d-flex justify-content-start align-items-center py-3 fw-bold"
                            style={{
                                fontSize: '1.4rem', border: 'none', whiteSpace: 'nowrap', overflow: 'hidden',
                                opacity: isSidebarOpen ? 1 : 1, transition: 'opacity 0.3s ease-in-out'
                            }}>
                            <Mail size={35} />
                            {isSidebarOpen && <div className="ms-3" style={{ opacity: isSidebarOpen ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>お問い合わせ</div>}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;