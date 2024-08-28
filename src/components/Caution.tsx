import { useTranslation } from 'react-i18next';

const Caution = () => {
    const { t } = useTranslation();

    return (
        <div className="d-flex justify-content-center h-100 " style={{backgroundColor: '#f5f8ef'}}>
                <h2 className="display-3">{t('caution')}</h2>
        </div>
    );
};

export default Caution;