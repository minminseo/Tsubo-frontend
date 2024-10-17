import React from 'react';

const Contact = ({ lng }: { lng: string }) => {
    const formUrl =
        lng === 'ko' // もしlngが'ko'(true)なら、韓国語のGoogleフォームを表示
            ? 'https://docs.google.com/forms/d/e/1FAIpQLSfpwyzJylmwb-pUqHLqxci_qUzxRzgaljdDIkKaiUKfBLmhkw/viewform?usp=sf_link'
            : 'https://docs.google.com/forms/d/e/1FAIpQLSclnYJmhh38DlVQEns6FvWx9-6GlYN6Ht7eS-zzNPeVURwPbg/viewform?usp=sf_link';

    return (
        <div className="d-flex justify-content-center h-100" style={{ backgroundColor: '#f5f8ef' }}> {/* #f5f8efはGoogleフォームの背景色と同じ */}
            <iframe
                src={formUrl}
                width="100%"
                height="100%"
                title="Google Forms Contact Form"
            >
                Loading…
            </iframe>
        </div>
    );
};

export default Contact;
