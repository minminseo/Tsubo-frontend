

interface Props {
    changeLanguage: (lng: string) => void; // プロップスとしてchangeLanguageを追加
}
// Settingコンポーネントでは、今のところ言語設定を変更するためだけの用途。
const Setting = ({ changeLanguage }: Props) => {

    return (
        <div className="d-flex align-items-center justify-content-center flex-column h-100 " style={{backgroundColor: '#f5f8ef'}}>
            <div className="display-6 mb-5" style={{color: '#001d0b'}}>
                Language
            </div>
            <div>
                <button 
                    onClick={() => changeLanguage('ja')} // ボタンをクリックすると、changeLanguage関数が実行され、引数に'ja'が渡される
                    className="btn btn-outline-success me-2"
                    style={{ border: '1px solid #c0c0c0', height: '100px', width: '250px'}}
                    >
                    日本語
                </button>
                <button 
                    onClick={() => changeLanguage('ko')} // ボタンをクリックすると、changeLanguage関数が実行され、引数に'ko'が渡される
                    className="btn btn-outline-success"
                    style={{ border: '1px solid #c0c0c0', height: '100px', width: '250px'}}
                    >
                    한국어
                </button>
            </div>
        </div>
    );
};

export default Setting;
