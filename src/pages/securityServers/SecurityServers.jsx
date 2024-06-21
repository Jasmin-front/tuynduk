import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSecurityServers } from '../../redux/SecurityServersReducer/securityServersReducer.js';
import TitlePages from '../../components/TitlePages/TitlePages.jsx';
import './SecurityServers.css';
import {Link} from "react-router-dom";

const SecurityServers = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.securityServers.data);

    useEffect(() => {
        dispatch(fetchSecurityServers());
    }, [dispatch]);

    const getClassUserStyle = (classUser) => {
        if (classUser === 'GOV') {
            return { backgroundColor: 'rgb(131, 221, 226)' };
        } else if (classUser === 'COM') {
            return { backgroundColor: 'rgb(156, 131, 226)' };
        }
        return {};
    };

    return (
        <div className='security_servers_container'>
            <TitlePages bigTitle='Информационная система "Каталог"' title_pages_text='Список серверов безопасности' />
            <div className='security_servers_container_date'>
                <div className='service_шnfon_umbering_main'>
                    <div className='service_шnfon_umbering'>
                        <span>№</span>
                    </div>
                    <div className='security_servers_date_server'>
                        {users?.map((item, index) => (
                            <span key={index}>{index}</span>
                        ))}
                    </div>
                </div>
                <div className='service_шnfon_umbering_main'>
                    <div className='service_шnfon_server_code'>
                        <span>Код сервера</span>
                    </div>
                    <div className='security_servers_date_server'>
                        {users?.map((item, index) => (
                            <span key={index}>{item.user.code_server}</span>
                        ))}
                    </div>
                </div>
                <div className='service_шnfon_umbering_main'>
                    <div className='service_шnfon_name'>
                        <span>Наименование</span>
                    </div>
                    <div className='security_servers_date_server'>
                        {users?.map((item, index) => (
                            <Link to={`/participants/${item.id}`} key={index}>{item.title}</Link>
                        ))}
                    </div>
                </div>
                <div className='service_шnfon_umbering_main'>
                    <div className='service_шnfon_name_participant_class'>
                        <span>Класс участника</span>
                    </div>
                    <div className='security_servers_date_server'>
                        {users?.map((item, index) => (
                            <span className='security_servers_date_server_text' key={index} style={getClassUserStyle(item.user.class_user)}>
                                {item.user.class_user}
                            </span>
                        ))}
                    </div>
                </div>
                <div className='service_шnfon_umbering_main'>
                    <div className='service_шnfon_name_participant_code'>
                        <span>Код участника</span>
                    </div>
                    <div>
                        <div className='security_servers_date_server'>
                            {users?.map((item, index) => (
                                <span key={index}>{item.user.code_user}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='service_шnfon_umbering_main'>
                    <div className='service_шnfon_name_registration_date'>
                        <span>Дата регистрации</span>
                    </div>
                    <div id='security_servers_date_server' className='security_servers_date_server'>
                        {users?.map((item, index) => (
                            <span key={index}>{item.user.date_of_birth}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecurityServers;
