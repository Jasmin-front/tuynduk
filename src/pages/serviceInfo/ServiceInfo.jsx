import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './serviceInfo.css'
import serviceInfoTableImg from '../../assets/serviceInfo/service_info_table.svg'
const ServiceInfo = () => {
    const {postId}= useParams()
    const [addInfo, setAddInfo]= useState()
    console.log(postId)
    const getDate = async () =>{
        try {
            const response = await fetch(`https://656db53ebcc5618d3c23cb54.mockapi.io/todo/something/name/${postId}`)
            const data = await response.json();
            setAddInfo(data)
        }catch (e){
            console.error(e)
        }
    }
    useEffect(() => {
        getDate()
    }, []);
    return (
        <div className='serviceInfo'>
            <h2 className='service_infoTitle'>Информационная система “Каталог”</h2>
            <div className='serviceInfoTable'>
                {
                    addInfo ? (
                        <>
                            <h3>{addInfo.name}</h3>
                            <div className='table'>
                                <table>
                                    <tr>
                                        <th>Наименование</th>
                                        <td>{addInfo.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Подсистема</th>
                                        <td>{addInfo.subsystems}</td>
                                    </tr>
                                    <tr>
                                        <th>Статус</th>
                                        <td>{addInfo.subsystems}</td>
                                    </tr>
                                    <tr>
                                        <th>Идентификатор</th>
                                        <td>{addInfo.id}</td>
                                    </tr>
                                    <tr>
                                        <th>WSDL Файл</th>
                                        <td>{addInfo.subsystems}</td>
                                    </tr>
                                    <tr>
                                        <th>Приложение</th>
                                        <td>{addInfo.subsystems}</td>
                                    </tr>
                                    <tr>
                                        <th>Описание</th>
                                        <td>{addInfo.subsystems}</td>
                                    </tr>
                                    <tr>
                                        <th>Теги</th>
                                        <td>{addInfo.subsystems}</td>
                                    </tr>
                                </table>
                                <img src={serviceInfoTableImg} alt="image Info"/>
                            </div>
                            {/*<div className='tableBlock'>*/}
                            {/*    <div className='serviceInfoBlock'>*/}
                            {/*        <div>Наименование</div>*/}
                            {/*        <div>{addInfo.name}</div>*/}
                            {/*    </div>*/}
                            {/*    <div className='serviceInfoBlock'>*/}
                            {/*        <div>Подсистема</div>*/}
                            {/*        <div>{addInfo.subsystems}</div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </>


                    ) :(
                        <span></span>
                    )
                }
            </div>
        </div>
    );
};

export default ServiceInfo;