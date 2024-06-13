import React, { useState } from 'react';
import './RegistrationLeft.css';
import strelka from '../../assets/regitserLeft/strelka.svg';
import oep from '../../assets/regitserLeft/oep.svg';
import geo from '../../assets/regitserLeft/geo.svg';
import pens from '../../assets/regitserLeft/pens.svg';
import smile from '../../assets/regitserLeft/smile.svg';

const RegistrationLeft = () => {
    const [openText, setOpenText] = useState(null);

    const handleButtonClick = (text) => {
        setOpenText(openText === text ? null : text);
    };

    return (
        <div className="registrationLeft_container">
            <h2 className="registrationLeft_container_title">Часто задаваемые вопросы</h2>
            <div className="registrationLeft_container_btns">
                <button className='btns_info' onClick={() => handleButtonClick('Что такое ОЭП?')}>
                    <div className='btns_info_header'>
                        <img src={oep} alt="icon left" className="icon-left"/>
                        <span>Что такое ОЭП?</span>
                        <img className={`register_strelka ${openText === 'Что такое ОЭП?' ? 'rotate' : ''}`} src={strelka} alt="icon right"/>
                    </div>
                    <div className={`text ${openText === 'Что такое ОЭП?' ? 'open' : ''}`}>
                        Облачная электронная подпись (ОЭП) – это аналог собственноручной подписи в электронном формате,
                        которая содержит в себе цифровые символы с необходимыми данными о её владельце. ОЭП является квалифицированной электронной подписью и соответствует следующим признакам:
                        <ul>
                            <li>получена в результате криптографического преобразования информации с использованием ключа подписи;</li>
                            <li>позволяет однозначно определить лицо, подписавшее электронный документ;</li>
                            <li>создается с использованием средств электронной подписи, которые лицо, подписавшее электронный документ, способно сохранять под своим контролем;</li>
                            <li>ключ проверки электронной подписи указан в квалифицированном сертификате;</li>
                            <li>для создания и проверки электронной подписи используются средства электронной подписи, получившие подтверждение соответствия требованиям, установленным в соответствии с Законом Кыргызской Республики "Об электронной подписи".</li>
                        </ul>
                    </div>
                </button>

                <button className='btns_info' onClick={() => handleButtonClick('Где и как получить ОЭП?')}>
                    <div className="btns_info_header">
                        <img src={geo} alt="icon left" className="icon-left"/>
                        <span>Где и как получить ОЭП?</span>
                        <img className={`register_strelka ${openText === 'Где и как получить ОЭП?' ? 'rotate' : ''}`} src={strelka} alt="icon right"/>
                    </div>
                    <div className={`text ${openText === 'Где и как получить ОЭП?' ? 'open' : ''}`}>
                        ОЭП можно получить в:
                        <ul>
                            <li>Центрах обслуживания населения (ЦОН);</li>
                            <li>Центрах обслуживания предпринимателей (ЦОП);</li>
                            <li>Центрах гражданского и цифрового образования (ЦГЦО);</li>
                            <li>Местные территориальные управления (МТУ);</li>
                            <li>Посольства и консульства Кыргызской Республики, находящиеся на территории других стран;</li>
                        </ul>
                        ОЭП предоставляется на бесплатной основе только лицам, достигших совершеннолетия при наличии паспорта. ОЭП выдается сроком на 1 год с момента получения!
                        Для получения ОЭП необходимы следующие документы:
                        <ul>
                            <li>для физических лиц – паспорт;</li>
                            <li>для юридических лиц – следующий пакет документов, указанных здесь.</li>
                        </ul>
                    </div>
                </button>

                <button className='btns_info' onClick={() => handleButtonClick('Что такое ПЭП?')}>
                    <div className="btns_info_header">
                        <img src={pens} alt="icon left" className="icon-left"/>
                        <span>Что такое ПЭП?</span>
                        <img className={`register_strelka ${openText === 'Что такое ПЭП?' ? 'rotate' : ''}`} src={strelka} alt="icon right"/>
                    </div>
                    <div className={`text ${openText === 'Что такое ПЭП?' ? 'open' : ''}`}>
                        Простая электронная подпись (ПЭП) – это электронная подпись, ключ подписи которой совпадает с самой электронной подписью (коды, пароли и иные идентификаторы). ПЭП является неквалифицированной электронной подписью и соответствует следующим признакам:
                        <ul>
                            <li>получена в результате криптографического преобразования информации с использованием ключа подписи;</li>
                            <li>позволяет однозначно определить лицо, подписавшее электронный документ;</li>
                            <li>позволяет обнаружить факт внесения изменений в электронный документ после его подписания;</li>
                            <li>создается с использованием средств электронной подписи, которые лицо, подписавшее электронный документ, способно сохранять под своим контролем;</li>
                        </ul>
                    </div>
                </button>

                <button className='btns_info' onClick={() => handleButtonClick('Что такое ЕСИ?')}>
                    <div className="btns_info_header">
                        <img src={smile} alt="icon left" className="icon-left"/>
                        <span>Что такое ЕСИ?</span>
                        <img className={`register_strelka ${openText === 'Что такое ЕСИ?' ? 'rotate' : ''}`} src={strelka} alt="icon right"/>
                    </div>
                    <div className={`text ${openText === 'Что такое ЕСИ?' ? 'open' : ''}`}>
                        Единая система идентификации (ЕСИ) – это автоматизированная система, которая агрегирует методы идентификации и авторизации, предусмотренные законодательством Кыргызской Республики. Данная система позволяет пользователю:
                        <ul>
                            <li>использовать единую учётную запись для авторизации в различных государственных информационных системах, интегрированных с ЕСИ;</li>
                            <li>избежать множественных регистраций в разных системах государственных органов;</li>
                            <li>обеспечивает безопасное взаимодействие пользователя и информационной системы, подключенной к ЕСИ.</li>
                        </ul>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default RegistrationLeft;
