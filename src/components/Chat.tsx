const Chat = () => {

    return (
        <>
            <div className="d-flex flex-column h-100">
                <div className="flex-grow-1 overflow-auto p-5 bg-success-subtle"
                    style={{ fontSize: '10rem' }}>
                    ここ会話画面
                </div>
                <div className="p-4 bg-white border-top">
                    <div className="d-flex align-items-center">
                        <button
                            className="btn btn-outline-secondary btn-lg"
                            style={{ fontSize: '2rem' }}
                        >
                            リセット
                        </button>
                        <div className="flex-grow-1 mx-3">
                            <input
                                type="text"
                                className="form-control border-0 bg-light"
                                style={{
                                    fontSize: '2.5rem',
                                }}
                                placeholder="身体の症状を送信する"
                            />
                        </div>
                        <button
                            className="btn btn-success btn-lg"
                            style={{ fontSize: '2rem' }}
                        >
                            送信
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;