import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addUsersSlice, {addUsersAsyncData} from "../../redux/addUsersSlice/addUsersSlice.js";
import './Registrion.css'

const Registration = ({ setIsAuthenticated }) => {
    const dispatch = useDispatch();
    const { register, reset, handleSubmit, formState:{errors} } = useForm();

    const handleRegistration = (data) => {
        console.log(data)
        dispatch(addUsersAsyncData(data));
        reset();
        setIsAuthenticated(true);
    };

    return (
        <div className='registrationPage'>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <input
                    type="text"
                    placeholder='Логин'
                    {...register('login', {required:'*Обязательное поле'})}
                    // ref={register({ required: "*Обязательное поле", minLength: { value: 5, message: "*Не менее 5 символов" } })}
                />
                {errors.login && <p className='error-message'>{errors.login.message}</p>}
                <input
                    type="password"
                    placeholder='пароль'
                    {...register('password' , {required:'*Обязательное поле',  minLength:{value:5, message:'*Не менее 5 символов'}})}
                />
                {errors.password && <p className='error-message'>{errors.password.message}</p>}
                <button type="submit">Register</button>
            </form>
            <p><Link to="/login">Вход</Link></p>
        </div>
    );
};

export default Registration;
