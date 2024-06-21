import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Services.css';
import {fetchService} from "../../redux/ServiceReducer/serviceReducer.jsx";
import TitlePages from "../../components/TitlePages/TitlePages.jsx";
import {Link} from "react-router-dom";

const Services = () => {
    const { data } = useSelector(state => state.services);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchService());
    }, [dispatch]);


    const checkStatus = (status) => {
       return status ? 'Доступен' : 'Недоступен'
    }

    const getStatusCheck = (status) => {
        return status ? 'green' : 'red'
    }

    const getClassUserStyle = (classUser) => {
        if (classUser === 'GOV') {
            return { backgroundColor: 'rgb(131, 221, 226)' };
        } else if (classUser === 'COM') {
            return { backgroundColor: 'rgb(156, 131, 226)' };
        }
        return {};
    };


    return (
        <div className='service_container'>
            <TitlePages bigTitle='Информационная система "Каталог"' title_pages_text='Список сервисов' />
            <div className="service_container_main">
                <div  className='service_card'>
                    <div className='service_index'>
                        <span>№</span>
                    </div>
                    <div className='service_detail'>
                        {data?.map((item, index) => (
                            <span key={index}>{index}</span>
                        ))}
                    </div>
                </div>
                <div id='service_card_service'  className='service_card'>
                    <div className='service_service'>
                        <span>Сервис</span>
                    </div>
                    <div className='service_detail'>
                        {data?.map((item, index) => (
                            <Link to={`/services/${item.id}`} key={index}>{item.title}</Link>
                        ))}
                    </div>
                </div>
                <div  className='service_card'>
                    <div className='service_subsystems'>
                        <span>Подсистемы</span>
                    </div>
                    <div id='service_card_subsystems' className='service_detail'>
                        {data?.map((item, index) => (
                            <span key={index}>{item.subsystem.title}</span>
                        ))}
                    </div>
                </div>
                <div className='service_card'>
                    <div className='service_class'>
                        <span>Класс участника</span>
                    </div>
                    <div className='service_detail'>
                        {data?.map((item, index) => (
                            <span
                                className='new_participants_date_participant_text'
                                style={getClassUserStyle(item.subsystem.user.class_user)}
                                key={index}>{item.subsystem.user.class_user}</span>
                        ))}
                    </div>
                </div>
                <div className='service_card'>
                    <div className='service_code'>
                        <span>Код участника</span>
                    </div>
                    <div className='service_detail'>
                        {data?.map((item, index) => (
                            <span key={index}>{item.subsystem.user.code_user}</span>
                        ))}
                    </div>
                </div>
                <div className='service_card'>
                    <div className='service_subsystem_code'>
                        <span>Код подсистемы</span>
                    </div>
                    <div className='service_detail'>
                        {data?.map((item, index) => (
                            <span key={index}>{item.subsystem.code_sub_system}</span>
                        ))}
                    </div>
                </div>
                <div className='service_card'>
                    <div className='service_registration_date'>
                        <span>Дата регистрации</span>
                    </div>
                    <div id='service_detail_info' className='service_detail'>
                        {data?.map((item, index) => (
                            <span key={index}>{item.date_register}</span>
                        ))}
                    </div>
                </div>
                <div className='service_card'>
                    <div className='service_status'>
                        <span>Статус</span>
                    </div>
                    <div id='service_detail_service_status' className='service_detail'>
                        {data?.map((item, index) => (
                            <span className={getStatusCheck(item.status)} key={index}>
                                {checkStatus(item.status)}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
