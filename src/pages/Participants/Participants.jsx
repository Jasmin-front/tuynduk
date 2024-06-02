import React, { useState, useEffect } from 'react';
import './Participants.css';
import one from '../../assets/Particpants/one.svg';
import bigOne from '../../assets/Particpants/big-one.svg';
import two from '../../assets/Particpants/two.svg';
import bigTwo from '../../assets/Particpants/big-two.svg';
import three from '../../assets/Particpants/three.svg';
import threeBig from '../../assets/Particpants/three-big.svg';
import four from '../../assets/Particpants/four.svg';
import fourBig from '../../assets/Particpants/four-big.svg';

const Participants = () => {
    const [addService, setAddService] = useState([]);
    const [upDateService, setUpDateService] = useState([]);

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const [countThree, setCountThree] = useState(0);
    const [countFour, setCountFour] = useState(0);
    useEffect(() => {
       const asyncData = async () => {
           try {
               const response = await fetch('https://656db53ebcc5618d3c23cb54.mockapi.io/todo/something/name')
               const data = await response.json();
               setAddService(data)
           }catch (e){
               console.error(e)
           }
       }
       asyncData()
    },[])


    useEffect(() => {
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / 232));
        let currentCount = 0;

        const timer = setInterval(() => {
            currentCount++;
            setCountOne(currentCount);
            if (currentCount === 232) {
                clearInterval(timer);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / 1158));
        let currentCount = 0;

        const timer = setInterval(() => {
            currentCount++;
            setCountTwo(currentCount);
            if (currentCount === 1158) {
                clearInterval(timer);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / 258));
        let currentCount = 0;

        const timer = setInterval(() => {
            currentCount++;
            setCountThree(currentCount);
            if (currentCount === 258) {
                clearInterval(timer);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / 347));
        let currentCount = 0;

        const timer = setInterval(() => {
            currentCount++;
            setCountFour(currentCount);
            if (currentCount === 347) {
                clearInterval(timer);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, []);



    return (
        <div>
            <div className='card_number_main'>
                <div className="card-main">
                    <h2 className='card_main_title'>Информационная система “Каталог”</h2>
                    <div className="card_container">
                        <div className="card" id='one'>
                            <div className='card_info'>
                                <img className='min_img_card_number' src={one} alt=""/>
                                <h2 className='card_number'>{countOne}</h2>
                                <p className='card_text'>Участники</p>
                            </div>
                            <div className='diagnostic'>
                                <img src={bigOne} alt=""/>
                            </div>
                        </div>
                        <div className="card" id='two'>
                            <div className='card_info'>
                                <img className='min_img_card_number' src={two} alt=""/>
                                <h2 className='card_number'>{countTwo}</h2>
                                <p className='card_text'>Cистемы</p>
                            </div>
                            <div className='diagnostic'>
                                <img src={bigTwo} alt=""/>
                            </div>
                        </div>
                        <div className="card" id='three'>
                            <div className='card_info'>
                                <img className='min_img_card_number' src={three} alt=""/>
                                <h2 className='card_number'>{countThree}</h2>
                                <p className='card_text'>Серверы безопасности</p>
                            </div>
                            <div className='diagnostic'>
                                <img src={threeBig} alt=""/>
                            </div>
                        </div>
                        <div className="card" id='four'>
                            <div className='card_info'>
                                <img className='min_img_card_number' src={four} alt=""/>
                                <h2 className='card_number'>{countFour}</h2>
                                <p className='card_text'>Подсистемы</p>
                            </div>
                            <div className='diagnostic'>
                                <img src={fourBig} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add_sevice">
                    <h4 className='add_sevice_title'>Недавно зарегистрированные сервисы</h4>
                    <div className='service_info' >
                        <div>
                            <h5 className='service_info_title' id='service_info_title_one'>Наимования</h5>
                            {
                                addService?(
                                    addService.map((item, index) => (
                                        <div className='name' key={index}><span>{item.name}</span>
                                        </div>
                                    ))):(
                                        <span>loading...</span>
                                )
                            }
                        </div>
                        <div>
                            <h5 className='service_info_title' id='service_info_title_two'>Подсистема</h5>
                            {
                                addService?(
                                    addService.map((item, index) => (
                                        <div className='subsystems' key={index}><span>{item.subsystems}</span>
                                        </div>
                                    ))):(
                                    <span>loading...</span>
                                )
                            }
                        </div>
                        <div>
                            <h5 className='service_info_title' id='service_info_title_three' >Дата регистрации</h5>
                            {
                                addService?(
                                    addService.map((item, index) => (
                                        <div className='registrion' key={index}><span>{item.registrion}</span>
                                        </div>
                                    ))):(
                                    <span>loading...</span>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="update_service">
                    <h4 className='add_sevice_title'>Недавно измененные сервисы</h4>
                    <div className='service_info'>
                        <div>
                            <h5 className='service_info_title' id='service_info_title_one'>Наимования</h5>
                            {
                                addService ? (
                                    addService.map((item, index) => (
                                        <div className='name' key={index}><span>{item.name}</span>
                                        </div>
                                    ))) : (
                                    <span>loading...</span>
                                )
                            }
                        </div>
                        <div>
                            <h5 className='service_info_title' id='service_info_title_two'>Подсистема</h5>
                            {
                                addService ? (
                                    addService.map((item, index) => (
                                        <div className='subsystems' key={index}><span>{item.subsystems}</span>
                                        </div>
                                    ))) : (
                                    <span>loading...</span>
                                )
                            }
                        </div>
                        <div>
                            <h5 className='service_info_title' id='service_info_title_three'>Дата регистрации</h5>
                            {
                                addService ? (
                                    addService.map((item, index) => (
                                        <div className='registrion' key={index}><span>{item.registrion}</span>
                                        </div>
                                    ))) : (
                                    <span>loading...</span>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Participants;
