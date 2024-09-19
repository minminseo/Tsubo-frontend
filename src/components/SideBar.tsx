
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, AlertCircle, Mail, Menu, Book, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Props {
    isSidebarOpen: boolean; // サイドバーが開いているかどうかを示すブール値
    toggleSidebar: () => void; // サイドバーを開閉するための関数。App.tsxで定義されている。
}

const SideBar = ({ isSidebarOpen, toggleSidebar }: Props) => {
    const location = useLocation(); // useLocationフックで現在のページのパスを取得し、パスごとにスタイルの適用している。

    // useTranslationフックでt関数を取得
    // このt関数を使って、翻訳したい文字列のキーをt関数の引数に渡すことで、翻訳された文字列を取得できる
    const { t } = useTranslation(); 

    /* 今のところサイドバーのOpen状態(getButtonClassInOpen)とClose状態(getButtonClassInClose)でスタイルを分ける必要はないけど、
    今後分けるかもしれないのでこのまま残しておく。必要ないこと確定したら一つにする(Linkタグ内の分岐も消す)。*/
    const getButtonClassInClose = (path: string) => (
        location.pathname === path ?
            'btn btn-success text-light d-flex justify-content-start align-items-center my-1 py-2 fw-bold' : // 現在のパスがリンクのパスと一致する場合、ボタン有効化を表すスタイル適用。
            'btn btn-outline-success d-flex justify-content-start align-items-center my-1 py-2 fw-bold' // 一致しない場合、ボタン無効化を表すスタイル適用。
    );

    const getButtonClassInOpen = (path: string) => (
        location.pathname === path ?
            'btn btn-success text-light d-flex justify-content-start align-items-center my-1 py-2 fw-bold' :
            'btn btn-outline-success d-flex justify-content-start align-items-center my-1 py-2 fw-bold'
    );

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} // サイドバーが開いている場合、'open'クラスを適用する
            style={{
                width: isSidebarOpen ? '250px' : '75px', // サイドバーが開いている場合、幅を250px、閉じている場合、幅を75px。
                transition: 'width 0.3s ease-in-out',
                overflow: 'hidden',
                backgroundColor: '#cbddb1'
            }}>
            <div className="m-2">
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-outline-success mb-5" onClick={toggleSidebar} style={{ border: 'none' }}> {/* サイドバーを開閉するボタン */}
                        <Menu size={35} /> 
                    </button>
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/" className={` ${isSidebarOpen ? getButtonClassInOpen('/') : getButtonClassInClose('/')} `} // チャット画面へのリンク
                            style={{ fontSize: '1.4rem', border: 'none' }}>
                            <MessageCircle size={35} /> 
                            {isSidebarOpen && <div className="ms-3" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>{t('chat_screen')}</div>} {/* サイドバーが開いている場合、チャット画面の翻訳された文字列を表示 */}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/guide" className={` ${isSidebarOpen ? getButtonClassInOpen('/guide') : getButtonClassInClose('/guide')} `} // ガイド画面へのリンク
                            style={{ fontSize: '1.4rem', border: 'none' }}>
                            <Book size={35} />
                            {isSidebarOpen && <div className="ms-3" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>{t('guide')}</div>} {/* サイドバーが開いている場合、ガイド画面の翻訳された文字列を表示 */}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/caution" className={` ${isSidebarOpen ? getButtonClassInOpen('/caution') : getButtonClassInClose('/caution')} `} // 注意事項画面へのリンク
                            style={{ fontSize: '1.4rem', border: 'none' }}>
                            <AlertCircle size={35} />
                            {isSidebarOpen && <div className="ms-3" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>{t('caution')}</div>} {/* サイドバーが開いている場合、注意事項画面の翻訳された文字列を表示 */}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={` ${isSidebarOpen ? getButtonClassInOpen('/contact') : getButtonClassInClose('/contact')} `} // お問い合わせ画面へのリンク
                            style={{ fontSize: '1.4rem', border: 'none' }}>
                            <Mail size={35} />
                            {isSidebarOpen && <div className="ms-3" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>{t('contact')}</div>} {/* サイドバーが開いている場合、お問い合わせ画面の翻訳された文字列を表示 */}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/setting" className={` ${isSidebarOpen ? getButtonClassInOpen('/setting') : getButtonClassInClose('/setting')} `} // 設定画面へのリンク
                            style={{ fontSize: '1.4rem', border: 'none' }}>
                            <Settings size={35} />
                            {isSidebarOpen && <div className="ms-3" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>setting</div>} {/* サイドバーが開いている場合、設定画面の翻訳された文字列を表示 */}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
