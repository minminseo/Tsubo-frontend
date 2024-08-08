import { useEffect } from 'react';
import '../styles.css';

interface Props {
    showResetModal: boolean;
    setShowResetModal: (value: boolean) => void;
    setMessages: (value: []) => void;
    setInput: (value: string) => void;
    reshuffleButtonTexts: () => void;
}

const ResetChat = ({ showResetModal, setShowResetModal, setMessages, setInput, reshuffleButtonTexts }: Props) => {

    const handleReset = () => {
        setMessages([]);
        setInput('');
        reshuffleButtonTexts();
        setShowResetModal(false);
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => { // キー入力され、それがEscキーなら、setShowResetModalをfalseにしてモーダルウィンドウを閉じる
            if (e.key === 'Escape') {
                setShowResetModal(false);
            }
        };
        window.addEventListener('keydown', handleEsc); // キー入力された時にhandleEscを実行

        return () => {
            window.removeEventListener('keydown', handleEsc);
        }; // windowオブジェクトからkeydownイベントを削除し、handleEsc関数がこれ以上呼び出されないようにする。
    }, [setShowResetModal]); // setShowResetModalが変更された時にuseEffectを実行

    return (
        <>
            <div
                className={`modal`}
                style={{ display: showResetModal ? 'block' : 'none' }} // もし、showResetModalがtrueならモーダルウィンドウを表示
                data-bs-backdrop="true" // モーダルウィンドウの背景をクリックしたらモーダルウィンドウが閉じるようにする。
                data-bs-keyboard="true" // キーボードのEscキーを押すとモーダルウィンドウが閉じるようにする。
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setShowResetModal(false);
                    }
                }} // モーダルウィンドウの背景をクリックしたらモーダルウィンドウが閉じるようにする。

            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content" style={{ borderRadius: '40px', backgroundColor: '#f5f8ef', color: '#001d0b' }}>
                        <div className="modal-header border-bottom-0"> {/* モーダルウィンドウのヘッダー */}
                            <h5 className="fs-2 mt-3 ms-3">会話をリセットしますか？</h5>
                        </div>
                        <div className="modal-body"> {/* モーダルウィンドウのボディ */}
                            <p className="fs-4 ms-3">これまでの会話をリセットします。</p>
                        </div>
                        <div className="modal-footer border-top-0 d-flex justify-content-end"> {/* モーダルウィンドウのフッター */}
                            <button
                                type="button"
                                className="btn btn-cancel fs-2 mb-3 me-1"
                                style={{ borderRadius: '20px', color: '#001d0b' }}
                                onClick={() => setShowResetModal(false)}> {/* キャンセルボタンを押すとshowResetModalがfalseになりモーダルウィンドウが閉じる */}
                                キャンセル
                            </button> {/* キャンセルボタンを押すとshowResetModalがfalseになりモーダルウィンドウが閉じる */}
                            <button
                                type="button"
                                className="btn btn-danger fs-2 mb-3 ms-1 me-3"
                                style={{ borderRadius: '20px' }}
                                onClick={handleReset}> {/* リセットボタンを押すとChat.tsxのhandleResetが実行されて配列messages(会話の履歴)とinput(入力フォーム)の中身が空になる */}
                                リセット
                            </button> {/* リセットボタンを押したらhandleResetが実行されて配列messages(会話の履歴)とinput(入力フォーム)の中身が空になる */}
                        </div>
                    </div>
                </div>
            </div>
            {showResetModal && <div className="modal-backdrop show"></div>}
        </>
    );
};

export default ResetChat;
