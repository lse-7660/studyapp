'use client';

import { useStopwatch } from '@/contexts/stopwatchContext';
import React from 'react';
import Chart from 'react-apexcharts';

const WeeklyGraph = () => {
    const { weeklyData } = useStopwatch();

    const MIN_BAR_HEIGHT = 20;
    const chartHeight = 200;
    const maxDataValue = Math.max(...Object.values(weeklyData));
    const chartScalingFactor = chartHeight / (maxDataValue || 1);

    const chartData = {
        series: [
            {
                name: '공부 시간 (초)',
                data: Object.values(weeklyData).map((value) => value + MIN_BAR_HEIGHT / chartScalingFactor),
            },
        ],
        options: {
            chart: {
                height: chartHeight,
                toolbar: {
                    show: false,
                },
                fontFamily: 'Pretendard',
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '70%',
                    borderRadius: 4,
                    dataLabels: {
                        position: 'top',
                    },
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (value, { dataPointIndex }) {
                    const realValue = Object.values(weeklyData)[dataPointIndex];
                    if (realValue === 0) return '';
                    const seconds = realValue;
                    const hours = Math.floor(seconds / 3600);
                    const minutes = Math.floor((seconds % 3600) / 60);
                    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                },
                style: {
                    fontSize: 10,
                    textAnchor: 'middle',
                    colors: ['#707070'],
                },
                offsetY: -20,
            },
            xaxis: {
                categories: Object.keys(weeklyData),
                labels: {
                    style: {
                        fontSize: '16px',
                    },
                },
                // axisBorder: {
                //     show: false,
                // },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                min: 0,
                max: Math.max(...Object.values(weeklyData)) * 1.2,
                labels: { show: false },
            },
            colors: ['#e0e0e0'],
            fill: {
                opacity: 1,
            },
            grid: {
                position: 'back',
                strokeDashArray: 5,
                padding: {
                    left: 0,
                    right: 0,
                },
            },
        },
    };

    return (
        <div className="chart-container">
            <Chart options={chartData.options} series={chartData.series} type="bar" height={chartHeight} />
        </div>
    );
};

export default WeeklyGraph;
