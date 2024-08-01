import React, { useState, useRef, useEffect } from 'react';
import { Send, RefreshCw } from 'lucide-react';
import axios from 'axios';

interface Message {
    text: string;
    isUser: boolean;
}

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // messageが変わったらメッセージの終わりにスクロールさせる処理
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    /* 送信方法は2パターン（送信ボタンクリック or エンターキー）
    以下は送信ボタンをクリックした時 or エンターキー押したことにより関数handleKeyPressが実行され、
    この関数内でhandleSendが実行された時の処理。
    inputが空でなければmessagesに新しいメッセージを追加し、バックエンドにinputを送信して返事を受け取る。
    */
    const handleSend = async () => {
        if (input.trim()) { // trimで余計な空白を削除
            setMessages(prev => [...prev, { text: input, isUser: true }]); // isUserをtrueにすることでユーザーのメッセージとして表示
            setInput(''); // メッセージを送信したら入力フォームを空にする

            try {
                const response = await axios.post('http://127.0.0.1:5000/process_message', { message: input });  // エンドポイントをprocess_messageに設定

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
            handleSend();
        }
    };
    


    return (
        <> {/* d-flexで flexboxを使い、flex-columnで縦方向に要素を並べる。 */}
            <div className="d-flex flex-column h-100"> 
                {/* ここから会話の表示部分 */}
                <div className="flex-grow-1 overflow-auto p-5 bg-success-subtle">
                    <div className="container" style={{ maxWidth: '1500px' }}>
                        <div>
                            {messages.map((message, index) => (
                                /* 配列messageをループ処理して1列ずつ要素(メッセージ)を表示するためのコンテナを表示していく。
                                message.isUserが
                                trueなら右端(justify-content-end)に要素を表示して、
                                falseなら左端(justify-content-start)に要素表示することで、
                                ユーザーのメッセージと返事のメッセージを区別できるようにする。
                                */
                                <div key={index} className={`d-flex ${message.isUser ? 'justify-content-end' : 'justify-content-start'} mb-5`}>
                                    <div
                                        /* メッセージの見た目を定義。
                                        ユーザー→bg-success text-white
                                        返事→bg-white
                                        */
                                        className={`p-3 ${message.isUser ? 'bg-success text-white' : 'bg-white'}`}
                                        style={{
                                            maxWidth: '80%',
                                            fontSize: '2.5rem',
                                            borderRadius: '15px',
                                            wordBreak: 'break-word'
                                        }}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} /> {/* 送信と同時に自動で最後のメッセージまでスクロールする */}
                        </div>
                    </div>
                </div>
                {/* ここまで会話の表示部分 */}

                {/* ここから入力部分 */}
                <div className="p-4 bg-white border-top">
                    <div className="d-flex align-items-center">
                        {/* リセットボタン */}
                        <button
                            className="btn btn-outline-secondary btn-lg"
                            style={{ height: '100px', width: '100px', flexShrink: 0 }}
                            disabled={messages.length === 0} // 配列messagesが空の時はリセットボタンを無効化
                        >
                            <RefreshCw size={60} />
                        </button>

                        {/* 入力フォーム */}
                        <div className="flex-grow-1 mx-3">
                            <input
                                type="text"
                                className="form-control border-0 bg-light"
                                style={{
                                    height: '100px',
                                    fontSize: '2.5rem',
                                    paddingLeft: '30px',
                                    paddingRight: '30px',
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
                            className="btn btn-success btn-lg"
                            style={{ height: '100px', width: '100px', flexShrink: 0 }}
                            onClick={handleSend}
                            disabled={!input.trim()} // 入力フォームが空の時は送信ボタンを無効化
                        >
                            <Send size={60} />
                        </button>
                    </div>
                </div>
                {/* ここまで入力部分 */}
            </div>


        </>
    );
};

export default Chat;

