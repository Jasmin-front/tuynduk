import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './RegistrationLeft.css';
import strelka from '../../assets/regitserLeft/strelka.svg';
import oep from '../../assets/regitserLeft/oep.svg';
import geo from '../../assets/regitserLeft/geo.svg';
import pens from '../../assets/regitserLeft/pens.svg';
import smile from '../../assets/regitserLeft/smile.svg';


const RegistrationLeft = () => {
    const { t } = useTranslation();
    const [openText, setOpenText] = useState(null);

    const handleButtonClick = (text) => {
        setOpenText(openText === text ? null : text);
    };

    return (
        <div className="registrationLeft_container">
            <h2 className="registrationLeft_container_title">{t('faq')}</h2>
            <div className="registrationLeft_container_btns">
                <button className='btns_info' onClick={() => handleButtonClick(t('whatIsOEP'))}>
                    <div className='btns_info_header'>
                        <img src={oep} alt="icon left" className="icon-left"/>
                        <span>{t('whatIsOEP')}</span>
                        <img className={`register_strelka ${openText === t('whatIsOEP') ? 'rotate' : ''}`} src={strelka} alt="icon right"/>
                    </div>
                    <div className={`text ${openText === t('whatIsOEP') ? 'open' : ''}`}>
                        {t('oepDescription')}
                    </div>
                </button>

                <button className='btns_info' onClick={() => handleButtonClick(t('whereToGetOEP'))}>
                    <div className="btns_info_header">
                        <img src={geo} alt="icon left" className="icon-left"/>
                        <span>{t('whereToGetOEP')}</span>
                        <img className={`register_strelka ${openText === t('whereToGetOEP') ? 'rotate' : ''}`} src={strelka} alt="icon right"/>
                    </div>
                    <div className={`text ${openText === t('whereToGetOEP') ? 'open' : ''}`}>
                        {t('oepLocations')}
                    </div>
                </button>

                <button className='btns_info' onClick={() => handleButtonClick(t('whatIsPEP'))}>
                    <div className="btns_info_header">
                        <img src={pens} alt="icon left" className="icon-left"/>
                        <span>{t('whatIsPEP')}</span>
                        <img className={`register_strelka ${openText === t('whatIsPEP') ? 'rotate' : ''}`} src={strelka} alt="icon right"/>
                    </div>
                    <div className={`text ${openText === t('whatIsPEP') ? 'open' : ''}`}>
                        {t('pepDescription')}
                    </div>
                </button>

                <button className='btns_info' onClick={() => handleButtonClick(t('whatIsESI'))}>
                    <div className="btns_info_header">
                        <img src={smile} alt="icon left" className="icon-left"/>
                        <span>{t('whatIsESI')}</span>
                        <img className={`register_strelka ${openText === t('whatIsESI') ? 'rotate' : ''}`} src={strelka} alt="icon right"/>
                    </div>
                    <div className={`text ${openText === t('whatIsESI') ? 'open' : ''}`}>
                        {t('esiDescription')}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default RegistrationLeft;


