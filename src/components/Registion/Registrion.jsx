import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addUsersAsyncData } from '../../redux/addUsersSlice/addUsersSlice.js';
import RegistrationLeft from '../RegistrionLeft/RegistrionLeft.jsx';
import tynduk from '../../assets/login/logo-tunduk.png';
import user from '../../assets/login/user.webp';
import password from '../../assets/login/password.webp';
import instagram from '../../assets/login/instagram_logo.svg';
import telegram from '../../assets/login/telegram_logo.svg';
import twitter from '../../assets/login/twitter_logo.svg';
import facebook from '../../assets/login/facebook_logo.svg';
import youtube from '../../assets/login/youtube_logo.svg';
import linkedin from '../../assets/login/linkedin_logo.svg';
import './Registrion.css';

const Registration = ({ setIsAuthenticated }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'РУС');

    useEffect(() => {
        setIsAuthenticated(false);
        i18n.changeLanguage(localStorage.getItem('language') || 'ru');
    }, []);

    const handleRegistration = (data) => {
        console.log(data);
        dispatch(addUsersAsyncData(data));
        reset();
    };

    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
        localStorage.setItem('language', lang);
        i18n.changeLanguage(lang === 'КЫР' ? 'ky' : lang === 'РУС' ? 'ru' : 'en');
    };

    return (
        <div className='registrationPage_main'>
            <div className='registrationPage'>
                <div className='registration_container_images'>
                    <img className='registration_tynduk_images' src={tynduk} alt=""/>
                </div>
                <div className='registration_container'>
                    <h2>{t('registration')}</h2>
                    <form className='registration_form' onSubmit={handleSubmit(handleRegistration)}>
                        <div className='registration_form_block'>
                            <input
                                className='registration_input'
                                type="text"
                                placeholder={t('username')}
                                {...register('username', { required: t('requiredField') })}
                            />
                            <img className='registration_input_images' src={user} alt=""/>
                            {errors.username && <p className='registration_error_message'>{errors.username.message}</p>}
                        </div>
                        <div className='registration_form_block'>
                            <input
                                className='registration_input'
                                type="password"
                                placeholder={t('password')}
                                {...register('password', {
                                    required: t('requiredField'),
                                    minLength: { value: 5, message: t('minLength', { count: 5 }) }
                                })}
                            />
                            <img className='registration_input_images' src={password} alt=""/>
                            {errors.password && <p className='registration_error_message'>{errors.password.message}</p>}
                        </div>
                        <button className='registration_btn' type="submit">{t('register')}</button>
                    </form>
                    <div className='registration_language_container_btns'>
                        <button
                            className={`registration_language_btns ${selectedLanguage === 'КЫР' ? 'selected' : ''}`}
                            onClick={() => handleLanguageChange('КЫР')}
                        >
                            КЫР
                        </button>
                        <button
                            className={`registration_language_btns ${selectedLanguage === 'РУС' ? 'selected' : ''}`}
                            onClick={() => handleLanguageChange('РУС')}
                        >
                            РУС
                        </button>
                        <button
                            className={`registration_language_btns ${selectedLanguage === 'ENG' ? 'selected' : ''}`}
                            onClick={() => handleLanguageChange('ENG')}
                        >
                            ENG
                        </button>
                    </div>
                    <p className='registration_exit'><Link to="/login">{t('login')}</Link></p>
                </div>
                <div className='registration_social'>
                    <img className='registration_img_social' src={instagram} alt="instagram"/>
                    <img className='registration_img_social' src={telegram} alt="telegram"/>
                    <img className='registration_img_social' src={twitter} alt="twitter"/>
                    <img className='registration_img_social' src={facebook} alt="facebook"/>
                    <img className='registration_img_social' src={youtube} alt="youtube"/>
                    <img className='registration_img_social' src={linkedin} alt="linkedin"/>
                </div>
            </div>
            <RegistrationLeft/>
        </div>
    );
};

export default Registration;


