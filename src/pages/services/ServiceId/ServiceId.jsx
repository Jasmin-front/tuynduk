import React, {useEffect} from 'react';
import './ServiceId.css'
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchServiceId} from "../../../redux/ServiceReducer/serviceReducer.jsx";
import TitlePages from "../../../components/TitlePages/TitlePages.jsx";

const ServiceId = () => {
    const {selectedService} = useSelector(state => state.services)
    const { serviceId} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchServiceId(serviceId))
    }, [])

    const checkStatus = (status) => {
        return status ? 'Доступен' : 'Не доступен'
    }

    console.log(selectedService)

    return (
        <div className='service-id-container'>
            <Link to={-1} className='service-id-back-button'>
                Назад
            </Link>
            <TitlePages
                bigTitle='Информационная система "Каталог"'
                title_pages_text='Метасервис центральных центральных компонентов системы'
            />
            <div className='service-id-participants-container-main'>
                <div className='service-id-participants-container-left'>
                    <div className='service-id-info-block'>
                        <div className='service-id-info-block-title'>
                            <p className='service-id-info-label'>Наименование </p>
                        </div>
                        <div className='service-id-info-block-text'>
                            <span className='service-id-info-value'>{selectedService?.title}</span>
                        </div>
                    </div>
                    <div className='service-id-info-block'>
                        <div className='service-id-info-block-title'>
                            <p className='service-id-info-label'>Подсистема</p>
                        </div>
                        <div className='service-id-info-block-text'>
                            <span className='service-id-info-value'>{selectedService?.subsystem.title}</span>

                        </div>
                    </div>
                    <div className='service-id-info-block'>
                    <div className='service-id-info-block-title'>
                            <p className='service-id-info-label'>Статус</p>
                        </div>
                        <div className='service-id-info-block-text'>
                            <span className='service-id-info-value'>{checkStatus(selectedService?.status)}</span>
                        </div>
                    </div>
                    <div className='service-id-info-block'>
                    <div className='service-id-info-block-title'>
                            <p className='service-id-info-label'>Идентификатор</p>
                        </div>
                        <div className='service-id-info-block-text'>
                            <span className='service-id-info-value'>
                                {selectedService?.subsystem.code_sub_system}/
                                {selectedService?.subsystem.user.class_user}/
                                {selectedService?.subsystem.user.code_user}/
                                {selectedService?.subsystem.user.code_server}

                            </span>
                        </div>
                    </div>
                    <div className='service-id-info-block'>
                        <div className='service-id-info-block-title'>
                            <p className='service-id-info-label'>WSDL Файл</p>
                        </div>
                        <div className='service-id-info-block-text'>
                            <p className='service-id-info-value'>Файл отсуствует</p>

                        </div>
                    </div>
                    <div className='service-id-info-block'>
                        <div className='service-id-info-block-title'>
                            <p className='service-id-info-label'>Приложение</p>
                        </div>
                        <div className='service-id-info-block-text'>
                            <p className='service-id-info-value'>Нет приложения</p>
                        </div>
                    </div>
                    <div className='service-id-info-block'>
                        <div className='service-id-info-block-title'>
                            <p className='service-id-info-label'>Описание</p>
                        </div>
                        <div className='service-id-info-block-text'>
                            <span className='service-id-info-value'>{selectedService?.description}</span>
                        </div>
                    </div>
                    <div className='service-id-info-block'>
                    <div className='service-id-info-block-title'>
                            <span className='service-id-info-label'>Теги</span>
                        </div>
                        <div className='service-id-info-block-text'>
                            <span className='service-id-info-value'>Нет тэгов</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceId;
