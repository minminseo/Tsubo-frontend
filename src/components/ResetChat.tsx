import React from 'react';

interface Props {
    showResetModal: boolean;
    setShowResetModal: (value: boolean) => void;
    handleReset: () => void;
}

const ResetChat = ({ showResetModal, setShowResetModal, handleReset }: Props) => {
    return (
        <>
            <div
                className={`modal`}
                style={{ display: showResetModal ? 'block' : 'none' }} // もし、showResetModalがtrueならモーダルウィンドウを表示
            >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content bg-success-subtle" style={{ borderRadius: '40px' }}>
                        <div className="modal-header border-bottom-0"> {/* モーダルウィンドウのヘッダー */}
                            <h5 className="display-5 w-100 mt-5 ms-5">会話をリセットしますか？</h5>
                        </div>
                        <div className="modal-body"> {/* モーダルウィンドウのボディ */}
                            <p className="display-6 ms-5">これまでの会話をリセットします。</p>
                        </div>
                        <div className="modal-footer border-top-0 d-flex justify-content-end"> {/* モーダルウィンドウのフッター */}
                            <button
                                type="button"
                                className="btn btn-cancel fs-1 mb-5 me-3"
                                style={{ borderRadius: '20px' }}
                                onClick={() => setShowResetModal(false)}> {/* キャンセルボタンを押すとshowResetModalがfalseになりモーダルウィンドウが閉じる */}
                                キャンセル
                            </button> {/* キャンセルボタンを押すとshowResetModalがfalseになりモーダルウィンドウが閉じる */}
                            <button
                                type="button"
                                className="btn btn-danger fs-1 fs-1 mb-5 ms-3 me-5"
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
