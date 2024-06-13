import React, {useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { asyncGetData } from "../../redux/addUsersSlice/addUsersSlice.js";
import { useForm } from "react-hook-form";
import tynduk from '../../assets/login/logo-tunduk.png'
import user from '../../assets/login/user.webp'
import password from '../../assets/login/password.webp'
import instagram from '../../assets/login/instagram_logo.svg'
import telegram from '../../assets/login/telegram_logo.svg'
import twitter from '../../assets/login/twitter_logo.svg'
import facebook from '../../assets/login/facebook_logo.svg'
import youtube from '../../assets/login/youtube_logo.svg'
import linkedin from '../../assets/login/linkedin_logo.svg'


import './Login.css'
import RegistrionLeft from "../RegistrionLeft/RegistrionLeft.jsx";
function Login({ setIsAuthenticated }) {
    const navigate = useNavigate();
    const location = useLocation()
    const {users} = useSelector((state) => state.user);
    const { register, handleSubmit, formState:{errors} } = useForm();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncGetData());
       if(location.pathname === '/login') setIsAuthenticated(false)
    }, []);

    const handleLogin = (data) => {
        console.log(data)
        const user = users.find(item => item.login === data.login && item.password === data.password);
        if (user) {
            setIsAuthenticated(true);
            localStorage.setItem('login',true)
            navigate('/');
        } else {
            console.log('Данные не верны');

        }
    };
    return (
        <div className='loginPage_main'>
            <div className='loginPage'>

                <div className='login_container_images'>
                    <img className='tynduk_images' src={tynduk} alt=""/>
                </div>
                <div className='login_container'>
                    <h2>Вход</h2>
                    <form className='tynduk_from' onSubmit={handleSubmit(handleLogin)}>
                        <div className='tynduk_from_bloack'>
                            <input
                                className='login_input'
                                {...register('login', {required: true})}
                                placeholder='Логин'
                                type="text"
                            />
                            <img className='input_images' src={user} alt=""/>
                        </div>
                        {errors.login && <p className='error-message'>*Oбьязательное поле</p>}
                        <div className='tynduk_from_bloack'>
                            <input
                                className='login_input'
                                placeholder='Пароль'

                                {...register('password', {required: true})}
                                type="password"
                            />
                            <img className='input_images' src={password} alt=""/>
                        </div>
                        {errors.password && <p className='error-message'>*Oбьязательное поле</p>}
                        <button className='login_btn' type="submit">Войти</button>
                    </form>
                    <div className='languach_container_btns'>
                        <button className='languach_btns'>КЫР</button>
                        <button className='languach_btns'>РУС</button>
                        <button className='languach_btns'>ENG</button>
                    </div>
                    <p className='exit'><Link to="/registration">Регистрация</Link></p>
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
