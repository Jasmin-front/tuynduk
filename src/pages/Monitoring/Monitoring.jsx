import React from 'react';
import Chart from "../../components/Chart/Chart.jsx";
import StateChart from "../../components/StateChart/StateChart.jsx";
import PieChart from "../../components/PieСhart/PieСhart.jsx";
import { useSpring, animated } from '@react-spring/web';
import BarChart from "../../components/BarChart/BarChart.jsx";
import './Monitoring.css'
import BarChatTwo from "../../components/BarChatTwo/BarChatTwo.jsx";
import BarChartServices from "../../components/BarChartServices/BarChartServices.jsx";
import BarChartSubSystem from "../../components/BarChartSubSystem/BarChartSubSystem.jsx";

const Monitoring = () => {
    const number = 2344033190;
    const { number: animatedNumber } = useSpring({
        from: { number: 0 },
        number: number,
        delay: 200,
        config: { duration: 2000 }
    });

    return (
        <div className="monitoring-container">
            <div className="monitoring-header">
                <h1 className='monitoring-container_titile'>Информационная система "Каталога"</h1>
                <span className='monitoring-container_titile_span'>Мониторинг запросов</span>
                <div className="monitoring-number">
                    <animated.h4 >
                        {animatedNumber.to(n => n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " "))}
                    </animated.h4>
                    <p className='monitoring-number_text'>запросов отправлено через СМЭВ «Түндүк» с 12 сентября 2018 г.</p>
                </div>
            </div>
            <div className="monitoring-charts">
                <div id='monitoring_state_chart' className="monitoring-chart  monitoring-state-chart">
                    <StateChart />
                </div>
                <div className="monitoring-chart monitoring-main-chart">
                    <Chart />
                </div>
                <div className="monitoring-combo-chart">
                    <div className="monitoring-pie-chart">
                        <PieChart />
                    </div>
                    <div className="monitoring-bar-chart">
                        <BarChart />
                    </div>
                </div>
                <div className='monitoring-combo-chart'>
                    <div className='monitoring-pie-chart'>
                        <BarChartServices/>
                    </div>
                    <div className='monitoring-pie-chart'>
                        <BarChartSubSystem/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Monitoring;