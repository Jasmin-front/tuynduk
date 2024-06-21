import React, { useEffect } from 'react';
import './Participants.css';
import {Link, useParams} from "react-router-dom";
import TitlePages from "../../../components/TitlePages/TitlePages.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchSecurityServerById } from "../../../redux/SecurityServersReducer/securityServersReducer.js";

const Participants = () => {
    const { participantsId } = useParams();
    const user = useSelector(state => state.securityServers.selectedServer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSecurityServerById(participantsId));
    }, [dispatch, participantsId]);

    const getClassUserStyle = (classUser) => {
        if (classUser === 'GOV') {
            return { backgroundColor: 'rgb(131, 221, 226)' };
        } else if (classUser === 'COM') {
            return { backgroundColor: 'rgb(156, 131, 226)' };
        }
        return {};
    };

    return (
        <div className='participants_container'>
            <Link to={-1} className='back_button'>
                Назад
            </Link>
            <TitlePages bigTitle='Информационная система "Каталог"' title_pages_text='Менеджер сервер системы межведомственного электронного взаимодействия "Тундук"' />
            <div className='participants_container_main'>
                <div className='participants_container_left'>
                    <div className='info_block'>
                        <div className='info_block_title'>
                            <p className='info_label'>Наименование </p>
                        </div>
                        <div className='info_block_text'>
                            <p className='info_value'>{user?.title}</p>
                        </div>
                    </div>
                    <div className='info_block'>
                        <div className='info_block_title'>
                            <p className='info_label'>Класс участника</p>
                        </div>
                        <div  id='info_block_text_id' className='info_block_text'
                            style={getClassUserStyle(user?.user.class_user)}
                        >
                            <p id='info_value_text_value' className='info_value'>{user?.user.class_user}</p>
                        </div>
                    </div>
                    <div className='info_block'>
                        <div className='info_block_title'>
                            <p className='info_label'>Идентификатор</p>

                        </div>
                        <div className='info_block_text'>
                            <p className='info_value'>
                                {user?.user.code_server}/
                                {user?.user.class_user}/
                                {user?.user.code_user}
                            </p>
                        </div>
                    </div>
                    <div className='info_block'>
                        <div className='info_block_title'>
                            <p className='info_label'>Адрес</p>
                        </div>
                        <div className='info_block_text'>
                            <p className='info_value'>{user?.address}</p>
                        </div>
                    </div>
                    <div className='info_block'>
                        <div className='info_block_title'>
                            <p className='info_label'>Тип</p>
                        </div>
                        <div className='info_block_text'>
                            <p className='info_value'>{user?.user.user_type}</p>
                        </div>
                    </div>
                    <div className='info_block'>
                        <div className='info_block_title'>
                            <p className='info_label'>Роль</p>
                        </div>
                        <div className='info_block_text'>
                            <p className='info_value'>Информация отсуствует</p>
                        </div>
                    </div>
                    <div className='info_block'>
                        <div className='info_block_title'>
                            <p className='info_label'>Описание</p>
                        </div>
                        <div className='info_block_text'>
                            <p className='info_value'>{user?.description}</p>
                        </div>
                    </div>
                </div>
                <div className='participants_container_right'>
                    <h4 className='contact_title'>Контактная данные</h4>
                    <div className='contact_container'>
                        <div className='contact_info'>
                            <h4 className='contact_label'>ФИО</h4>
                            <p className='contact_value'>{user?.user.username}</p>
                        </div>
                        <div className='contact_info'>
                            <h4 className='contact_label'>Email</h4>
                            <p className='contact_value'>{user?.user.email}</p>
                        </div>
                        <div className='contact_info'>
                            <h4 className='contact_label'>Номер телефона</h4>
                            <p className='contact_value'>{user?.user.phone_number}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Participants;
