import React, {useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { asyncGetData } from "../../redux/addUsersSlice/addUsersSlice.js";
import { useForm } from "react-hook-form";
import './Login.css'
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
        <div className='loginPage'>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <input
                    {...register('login', {required:true})}
                    type="text"
                />
                {errors.login && <p className='error-message'>*Oбьязательное поле</p>}
                <input
                    {...register('password',{required:true})}
                    type="password"
                />
                {errors.password && <p className='error-message'>*Oбьязательное поле</p>}
                <button type="submit">Login</button>
            </form>
            <p><Link to="/registration">Регистрация</Link></p>
        </div>
    );
}

export default Login;
