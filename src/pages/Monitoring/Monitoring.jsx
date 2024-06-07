import React from 'react';
import Chart from "../../components/Chart/Chart.jsx";

const Monitoring = () => {
    return (
        <div>
            <div>
                <h1>Информация система "Каталога"</h1>
                <span>Мониторинг запросов</span>
                <div>
                    <h4>2 344 033 190</h4>
                    <p>запросов отправлено через СМЭВ «Түндүк» с 12 сентября 2018 г.</p>
                </div>
                <Chart/>
            </div>
        </div>
    );
};

export default Monitoring;