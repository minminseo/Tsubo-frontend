import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    /* 
    ここで設定したキー達は、各コンポーネント内で使われるt関数の引数として扱われる。
    例えば、"チャット画面"と"채팅 화면"というように言語を切り替えたい部分があった場合、
    その部分で{t('chat_screen')}という風に記述して呼び出す。
    */
    ja: {
        translation: {
            "chat_screen": "チャット画面",
            "guide": "ツボの押し方", // これはテキトーな文章。一時的なやつ
            "caution": "使用上の注意", // これはテキトーな文章。一時的なやつ
            "contact": "お問い合わせ",
            "reset_chat": "会話をリセットしますか？",
            "reset_chat_confirm": "これまでの会話をリセットします。",
            "cancel": "キャンセル",
            "reset": "リセット",
            "error_message": "エラー",
            "tell_me_symptom": "症状をお聞かせください",
            "guide_page_title": "ツボの押し方のページ",
            "send_symptom": "身体の症状を送信する",
            "headache": "頭が痛いです",
            "stomach_ache": "お腹が痛いです",
            "muscle_pain": "筋肉痛です",
            "sleepy": "眠いです",
            "eye_strain": "目が疲れています",
            "shoulder_stiffness": "肩がこっています",
            "back_pain": "腰が痛いです",
            "stomach_pain": "胃が痛いです",
            "cold_symptoms": "風邪気味です",
            "stress": "ストレスがたまっています",
            "constipation": "便秘気味です",
            "mouth_ulcer": "口内炎があります",
            "knee_pain": "ひざが痛いです",
            "hangover": "二日酔いです",
            "cold_hands": "手が冷えています",
            "swollen_feet": "足がむくんでいます",
            "tinnitus": "耳鳴りがします",
            "menstrual_pain": "生理痛があります",
            "runny_nose": "鼻水が止まりません",
            "itchy_skin": "肌がかゆいです"
        }
    },
    ko: {
        translation: {
            "chat_screen": "채팅 화면",
            "guide": "지압 방법", // これはテキトーな文章。一時的なやつ
            "caution": "사용 시 주의사항", // これはテキトーな文章。一時的なやつ
            "contact": "문의하기",
            "reset_chat": "대화를 초기화하시겠습니까?",
            "reset_chat_confirm": "지금까지의 대화를 초기화합니다.",
            "cancel": "취소",
            "reset": "초기화",
            "error_message": "에러",
            "tell_me_symptom": "증상을 말씀해 주세요",
            "guide_page_title": "경혈을 누르는 방법의 페이지",
            "send_symptom": "몸의 증상을 송신하기",
            "headache": "머리가 아파요",
            "stomach_ache": "배가 아파요",
            "muscle_pain": "근육통이에요",
            "sleepy": "졸려요",
            "eye_strain": "눈이 피로해요",
            "shoulder_stiffness": "어깨가 결려요",
            "back_pain": "허리가 아파요",
            "stomach_pain": "위가 아파요",
            "cold_symptoms": "감기 기운이 있어요",
            "stress": "스트레스를 많이 받고 있어요",
            "constipation": "변비 기운이 있어요",
            "mouth_ulcer": "입안에 궤양이 있어요",
            "knee_pain": "무릎이 아파요",
            "hangover": "숙취가 있어요",
            "cold_hands": "손이 차가워요",
            "swollen_feet": "발이 부었어요",
            "tinnitus": "이명이 들려요",
            "menstrual_pain": "생리통이 있어요",
            "runny_nose": "콧물이 멈추지 않아요",
            "itchy_skin": "피부가 가려워요"
        }
    }
};

/* 
// ここ(i18n)で初期化し、初期化された翻訳のリソースはuseTranslationフックと連携する。
それにより、各コンポーネント内で翻訳を使えるようになる。
*/

i18n
    .use(LanguageDetector) // ユーザーのブラウザ環境から言語を自動検出。ユーザーが日本語環境でブラウザを開いた場合、jaをデフォルト言語として設定。
    .use(initReactI18next) // これでi18nをReactで使えるようにする。
    .init({
        resources, // ここで翻訳のリソース（jaとko）を定義。
        fallbackLng: 'ja', // デフォルトの言語
        interpolation: {
            escapeValue: false // falseにすることで、HTMLタグ、特殊文字をエスケープしないようにし、そのまま表示する。React使うならFalseが一般的。
        }
    }); 

export default i18n;
