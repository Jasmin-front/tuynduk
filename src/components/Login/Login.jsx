import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { asyncGetData } from "../../redux/addUsersSlice/addUsersSlice.js";
import { useForm } from "react-hook-form";

function Login({ setIsAuthenticated }) {
    const navigate = useNavigate();
    const {users} = useSelector((state) => state.user);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncGetData());
        setIsAuthenticated(false)
    }, []);
    const handleLogin = (data) => {
        const user = users.find(item => item.login === data.login && item.password === data.password);
        if (user) {
            setIsAuthenticated(true);
            navigate('/');
        } else {
            console.log('Данные не верны');
        }
    };

    return (
        <div>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <input
                    {...register('login')}
                    type="text"
                />
                <input
                    {...register('password')}
                    type="password"
                />
                <button type="submit">Login</button>
            </form>
            <p><Link to="/registration">Регистрация</Link></p>
        </div>
    );
}

export default Login;
