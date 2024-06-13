import React, { useState, useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './Chart.css'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const Chart = () => {
    const chartRef = useRef(null);
    const [visibleYears, setVisibleYears] = useState({
        all: true,
        2018: true,
        2019: true,
        2020: true,
        2021: true,
        2022: true,
        2023: true,
        2024: true,
    });

    const datasets = {
        2018: {
            data: [0, 0, 0, 0, 0, 0, 0, 0, 283165, 29878, 40352, 1639],
            label: "2018",
            borderColor: "#3333ff",
            backgroundColor: "rgba(51, 51, 255, 0.5)",
            fill: 'start',
            lineTension: 0.4
        },
        2019: {
            data: [207468, 173180, 613439, 840632, 73585, 2011625, 1439802, 3061187, 4018904, 7034161, 6823751, 6619065],
            label: "2019",
            borderColor: "#00FF00",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: 'start',
            lineTension: 0.4
        },
        2020: {
            data: [9694822, 10545336, 10081066, 15723910, 17008561, 16713212, 10265554, 20366978, 24894722, 24095043, 23816513, 34515977],
            label: "2020",
            borderColor: "#87CEEB",
            backgroundColor: "rgba(135, 206, 235, 0.5)",
            fill: 'start',
            lineTension: 0.4
        },
        2021: {
            data: [23719175, 24236550, 25968965, 24764876, 15106919, 12658707, 30828136, 50721601, 23094400, 25014433, 25014433, 25371873],
            label: "2021",
            borderColor: "#FF0000",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: 'start',
            lineTension: 0.4
        },
        2022: {
            data: [14454490, 14725179, 10223954, 55456947, 70290030, 40908913, 36446357, 36332678, 70534449, 53281430, 9333899, 24285865],
            label: "2022",
            borderColor: "#FFA500",
            backgroundColor: "rgba(255, 165, 0, 0.5)",
            fill: 'start',
            lineTension: 0.4
        },
        2023: {
            data: [24828353, 23068376, 38491389, 54804040, 42712054, 54514222, 57669987, 71476512, 66964508, 34683555, 24413391, 26505728],
            label: "2023",
            borderColor: "#FF4500",
            backgroundColor: "rgba(255, 69, 0, 0.5)",
            fill: 'start',
            lineTension: 0.4
        },
        2024: {
            data: [42711536, 316243309, 155513928, 181473813, 138748904, 32193952, 0, 0, 0, 0, 0, 0],
            label: "2024",
            borderColor: "#800080",
            backgroundColor: "rgba(128, 0, 128, 0.5)",
            fill: 'start',
            lineTension: 0.4
        }
    };

    const lineChartData = {
        labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        datasets: Object.keys(datasets)
            .filter(year => visibleYears[year])
            .map(year => datasets[year])
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: (context) => {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.raw.toLocaleString();
                        return label;
                    }
                },
                bodyFont: {
                    size: 16
                },
                footerFont: {
                    size: 16 // Make tooltip footer bigger
                },
            },
            legend: {
                display: true,
                position: 'top',
            },
            drawText: {
                afterDatasetsDraw: (chart) => {
                    const ctx = chart.ctx;
                    chart.data.datasets.forEach((dataset, i) => {
                        const meta = chart.getDatasetMeta(i);
                        if (!meta.hidden) {
                            meta.data.forEach((element, index) => {
                                const data = dataset.data[index];
                                const x = element.x;
                                const y = element.y - 10;
                                ctx.fillStyle = '#000000'; // Color of the text
                                ctx.fillText(data.toLocaleString(), x, y);
                            });
                        }
                    });
                }
            }
        },
        scales: {
            x: {
                type: 'category',
                labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                grid: {
                    display: false, // Hide vertical grid lines
                },
                ticks: {
                    callback: function(value) {
                        const labels = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
                        return labels[value];
                    },
                    font: {
                        size: 14 // Default font size for month labels
                    },
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: true
                },
                ticks: {
                    callback: function(value) {
                        return value.toLocaleString();
                    }
                }
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
            axis: 'x'
        },
        elements: {
            point: {
                radius: 5,
                hoverRadius: 7,
                pointStyle: 'circle'
            },
            line: {
                borderWidth: 2,
                tension: 0.4
            }
        },
        hover: {
            mode: 'index',
            intersect: false,
            onHover: (event, activeElements) => {
                const chart = chartRef.current.chartInstance;
                if (activeElements.length > 0) {
                    chart.tooltip.setActiveElements(activeElements, { x: event.offsetX, y: event.offsetY });
                    chart.draw();
                } else {
                    chart.tooltip.setActiveElements([], {});
                    chart.draw();
                }
            }
        }
    };

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.chartInstance.destroy();
            }
        };
    }, []);

    const toggleYearVisibility = (year) => {
        setVisibleYears(prevState => ({
            ...prevState,
            [year]: !prevState[year]
        }));
    };

    const toggleAllVisibility = () => {
        const allVisible = !visibleYears.all;
        const newVisibleYears = {
            all: allVisible,
            2018: allVisible,
            2019: allVisible,
            2020: allVisible,
            2021: allVisible,
            2022: allVisible,
            2023: allVisible,
            2024: allVisible
        };
        setVisibleYears(newVisibleYears);
    };

    return (
        <div className='chart_container'>
            <div className='chart_container_min'>
                <h2 className='chart_container_title'>Количество запросов по годам</h2>
                <div className='chart_container_btns'>
                    <p className='chart_container_btns_text'>Выберите год:</p>
                    <button
                        className={`chart_container_min_btns ${visibleYears.all ? 'active' : ''}`}
                        onClick={toggleAllVisibility}
                    >
                        Все
                    </button>
                    {Object.keys(datasets).map(year => (
                        <button
                            className={`chart_container_min_btns ${visibleYears[year] ? 'active' : ''}`}
                            key={year}
                            onClick={() => toggleYearVisibility(year)}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>
            <Line
                ref={chartRef}
                data={lineChartData}
                options={options}
                width={160}
                height={60}
            />
        </div>
    );
};

export default Chart;
