import React, { useState, useRef, useEffect } from 'react';
import { Send, RefreshCw, MessageCircle } from 'lucide-react';
import ResetChat from './ResetChat';
import axios from 'axios';
import { symptomsSample, shuffleAndSelectSymptoms } from './SymptomSample';

interface Message {
    text: string;
    isUser: boolean;
}

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [showResetModal, setShowResetModal] = useState(false);
    const [buttonTexts, setButtonTexts] = useState<string[]>([]);

    useEffect(() => {
        setButtonTexts(shuffleAndSelectSymptoms(symptomsSample, 4));
        console.log('確認');
    }, []);

    const reshuffleButtonTexts = () => {
        setButtonTexts(shuffleAndSelectSymptoms(symptomsSample, 4));
    };

    // messageが変わったらメッセージの終わりにスクロールさせる処理
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    /* 送信方法は2パターン（送信ボタンクリック or エンターキー）
    以下は送信ボタンをクリックした時 or エンターキー押したことにより関数handleKeyPressが実行され、
    この関数内でhandleSendが実行された時の処理。
    inputが空でなければmessagesに新しいメッセージを追加し、バックエンドにinputを送信して返事を受け取る。
    */
    const handleSend = async (message: string) => {
        if (message.trim()) { // trimで余計な空白を削除
            setMessages(prev => [...prev, { text: message, isUser: true }]); // isUserをtrueにすることでユーザーのメッセージとして表示
            setInput(''); // メッセージを送信したら入力フォームを空にする

            try {
                const response = await axios.post('http://127.0.0.1:8080/process_message', { message });  // エンドポイントをprocess_messageに設定
                setMessages(prev => [...prev, { text: response.data.response, isUser: false }]);  // バックエンドからの返事のisUserをfalseにすることで返事のメッセージとして表示
            } catch (error) {
                console.error('Error:', error);
                setMessages(prev => [...prev, { text: 'エラー', isUser: false }]);
            }
        }
    };

    // エンターキーを押した時の処理
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend(input);
        }
    };

    return (
        <> {/* d-flexで flexboxを使い、flex-columnで縦方向に要素を並べる。 */}
            <div className="d-flex flex-column h-100">
                {/* ここから会話の表示部分 */}
                <div className="flex-grow-1 overflow-auto p-5 bg-success-subtle">
                    {/* 配列messagesの要素数(メッセージ数)が0の時と0以外の時でブロックを分ける。他に良い書き方があるか調べる。 */}
                    {messages.length === 0 ? (
                        <div className="d-flex container align-items-center justify-content-center flex-column h-100">
                            <div className="display-6 mb-5" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                                症状をお聞かせください
                            </div>
                            <div>
                                {buttonTexts.map((text, index) => (
                                    <button
                                        key={index}
                                        className="btn m-1"
                                        style={{ border: '1px solid #c0c0c0', backgroundColor: '#ddf1e8', height: '100px', width: '250px' }}
                                        onClick={() => handleSend(text)}
                                    >
                                        <div className="d-flex justify-content-start mb-3 ms-2" style={{ color: 'gray' }}>
                                            <MessageCircle size={20} />
                                        </div>
                                        <div className="d-flex justify-content-start ms-2 fs-6" style={{ color: '#001d0b' }}>
                                            {text}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        messages.map((message, index) => (
                            /* 配列messageをループ処理して1列ずつ要素(メッセージ)を表示するためのコンテナを表示していく。
                            message.isUserが
                            trueなら右端(justjify-content-end)に要素を表示して、
                            falseなら左端(justify-content-start)に要素表示することで、
                            ユーザーのメッセージと返事のメッセージを区別できるようにする。
                            */
                            <div className="container" style={{ maxWidth: '1500px' }}>
                                <div key={index} className={`d-flex ${message.isUser ? 'justify-content-end' : 'justify-content-start'} mb-5`}>
                                    <div
                                        /* メッセージの見た目を定義。
                                        ユーザー→bg-success text-white
                                        返事→bg-white
                                        */
                                        className={`p-3 ${message.isUser ? 'bg-success text-white' : 'bg-white'}`}
                                        style={{
                                            maxWidth: '80%',
                                            fontSize: '1.4rem',
                                            borderRadius: '15px',
                                            wordBreak: 'break-word'
                                        }}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                    <div ref={messagesEndRef} /> {/* 送信と同時に自動で最後のメッセージまでスクロールする */}
                </div>
                {/* ここまで会話の表示部分 */}


                {/* ここから入力部分 */}
                <div className="p-3 bg-white border-top">
                    <div className="d-flex align-items-center">
                        {/* リセットボタン */}
                        <button
                            className="btn btn-outline-secondary d-flex justify-content-center align-items-center"
                            style={{ height: '3rem', width: '3rem', flexShrink: 0 }}
                            disabled={messages.length === 0} // 配列messagesが空の時はリセットボタンを無効化
                            onClick={() => setShowResetModal(true)} // ここでshowResetModalをtrueにすることでResetChat.tsxでdisplayにblockを適用し、モーダルウィンドウを表示
                        >
                            <RefreshCw />
                        </button>

                        {/* 入力フォーム */}
                        <div className="flex-grow-1 mx-3">
                            <input
                                type="text"
                                className="form-control border-0 bg-light"
                                style={{
                                    height: '50px',
                                    fontSize: '1.5rem',
                                    paddingLeft: '1rem',
                                    paddingRight: '1rem',
                                    width: '100%'
                                }}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress} // ※onKeyPressを使わずにエンターキー送信できるように要修正
                                placeholder="身体の症状を送信する"
                            />
                        </div>

                        {/* 送信ボタン */}
                        <button
                            className="btn btn-success d-flex justify-content-center align-items-center"
                            style={{ height: '3rem', width: '3rem', flexShrink: 0 }}
                            onClick={() => handleSend(input)}
                            disabled={!input.trim()} // 入力フォームが空の時は送信ボタンを無効化
                        >
                            <Send size={24} />
                        </button>
                    </div>
                </div>
                {/* ここまで入力部分 */}
            </div>

            {/* リセットボタンクリック時にひらくモーダルウィンドウ */}
            <ResetChat // showResetModalがtrueの時に表示されるコンポーネント(モーダルウィンドウ)
                showResetModal={showResetModal} // showResetModalの値をshowResetModalに渡してPropsとしてResetChat.tsxに渡す(モーダルウィンドウの表示状態を制御するための状態変数を渡している)
                setShowResetModal={setShowResetModal} // 関数setShowResetModalをsetShowResetModalに渡してPropsとしてResetChat.tsxに渡す(モーダルウィンドウの表示状態を更新するための関数を渡している)
                setMessages={setMessages}
                setInput={setInput}
                reshuffleButtonTexts={reshuffleButtonTexts}
            />
        </>
    );
};

export default Chat;

