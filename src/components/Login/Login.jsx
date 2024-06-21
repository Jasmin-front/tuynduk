import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetData } from '../../redux/addUsersSlice/addUsersSlice.js';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import tynduk from '../../assets/login/logo-tunduk.png';
import user from '../../assets/login/user.webp';
import password from '../../assets/login/password.webp';
import instagram from '../../assets/login/instagram_logo.svg';
import telegram from '../../assets/login/telegram_logo.svg';
import twitter from '../../assets/login/twitter_logo.svg';
import facebook from '../../assets/login/facebook_logo.svg';
import youtube from '../../assets/login/youtube_logo.svg';
import linkedin from '../../assets/login/linkedin_logo.svg';
import './Login.css';
import RegistrionLeft from '../RegistrionLeft/RegistrionLeft.jsx';

function Login({ setIsAuthenticated }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { users } = useSelector((state) => state.user);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'ru');

    useEffect(() => {
        dispatch(asyncGetData());
        if (location.pathname === '/login') setIsAuthenticated(false);
    }, [location.pathname, dispatch, setIsAuthenticated]);

    const handleLogin = (data) => {
        const user = users.find(item => item.login === data.login && item.password === data.password);
        if (user) {
            setIsAuthenticated(true);
            localStorage.setItem('login', true);
            navigate('/');
            reset();
        } else {
            console.log(t('dataIncorrect'));
        }
    };

    const handleLanguageChange = (lang) => {
        console.log('Changing language to:', lang);
        setSelectedLanguage(lang);
        localStorage.setItem('language', lang);
        i18n.changeLanguage(lang.toLowerCase());
    };

    return (
        <div className='loginPage_main'>
            <div className='loginPage'>
                <div className='login_container_images'>
                    <img className='tynduk_images' src={tynduk} alt=""/>
                </div>
                <div className='login_container'>
                    <h2>{t('enter')}</h2>
                    <form className='tynduk_from' onSubmit={handleSubmit(handleLogin)}>
                        <div className='tynduk_from_bloack'>
                            <input
                                className='login_input'
                                {...register('login', { required: true })}
                                placeholder={t('login')}
                                type="text"
                                autoComplete="username"
                            />
                            <img className='input_images' src={user} alt=""/>
                        </div>
                        {errors.login && <p className='error-message'>{t('mandatoryField')}</p>}
                        <div className='tynduk_from_bloack'>
                            <input
                                className='login_input'
                                placeholder={t('password')}
                                {...register('password', { required: true })}
                                type="password"
                                autoComplete="current-password"
                            />
                            <img className='input_images' src={password} alt=""/>
                        </div>
                        {errors.password && <p className='error-message'>{t('mandatoryField')}</p>}
                        <button className='login_btn' type="submit">{t('enter')}</button>
                    </form>
                    <div className='language_container_btns'>
                        <button
                            className={`language_btns ${selectedLanguage === 'ky' ? 'selected' : ''}`}
                            onClick={() => handleLanguageChange('ky')}
                        >
                            {t('kyr')}
                        </button>
                        <button
                            className={`language_btns ${selectedLanguage === 'ru' ? 'selected' : ''}`}
                            onClick={() => handleLanguageChange('ru')}
                        >
                            {t('rus')}
                        </button>
                        <button
                            className={`language_btns ${selectedLanguage === 'en' ? 'selected' : ''}`}
                            onClick={() => handleLanguageChange('en')}
                        >
                            {t('eng')}
                        </button>
                    </div>
                    <p className='exit'><Link to="/registration">{t('registration')}</Link></p>
                </div>
                <div className='social'>
                    <img className='imgSoch' src={instagram} alt="instagram"/>
                    <img className='imgSoch' src={telegram} alt="telegram"/>
                    <img className='imgSoch' src={twitter} alt="twitter"/>
                    <img className='imgSoch' src={facebook} alt="facebook"/>
                    <img className='imgSoch' src={youtube} alt="youtube"/>
                    <img className='imgSoch' src={linkedin} alt="linkedin"/>
                </div>
            </div>
            <RegistrionLeft/>
        </div>
    );
}

export default Login;
