import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import subsystemsInfoTableImg from "../../assets/serviceInfo/service_info_table.svg";
import './subsystemsInfo.css'



const SubsystemsInfo = () => {
    const {postId} = useParams()
    const [addInfo, setAddInfo]= useState()
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
        <div>
            <div className='serviceInfo'>
                <h2 className='service_infoTitle'>Информационная система “Каталог”</h2>
                <div className='serviceInfoTable'>
                    {
                        addInfo ? (
                            <>
                                <h3>{addInfo.subsystems}</h3>
                                <div className='table'>
                                    <table>
                                        <tr>
                                            <th>Наименование</th>
                                            <td>{addInfo.subsystems}</td>
                                        </tr>
                                        <tr>
                                            <th>Участник</th>
                                            <td>{addInfo.subsystems}</td>
                                        </tr>
                                        <tr>
                                            <th>Идентификатор</th>
                                            <td>{addInfo.id}</td>
                                        </tr>
                                        <tr>
                                            <th>Статус</th>
                                            <td>{addInfo.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Описание</th>
                                            <td>{addInfo.subsystems}</td>
                                        </tr>
                                    </table>
                                    <img src={subsystemsInfoTableImg} alt="image Info"/>
                                </div>
                            </>
                        ) :(
                            <span></span>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SubsystemsInfo;