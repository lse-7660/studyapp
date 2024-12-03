import React from 'react';

import { useStopwatch } from '@/contexts/stopwatchContext';
import WeeklyGraph from './WeeklyGraph';

// WeeklyTab.jsx

const WeeklyTab = () => {
    const { weeklyData, formatStopwatch } = useStopwatch();

    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const currentDay = days[new Date().getDay()];
    const todayTime = weeklyData[currentDay] || 0;

    return (
        <div className="contents-gap">
            <div className="contents-wrap text-center">
                <h3>오늘의 공부 시간</h3>
                <p className="number-style text-5xl">{formatStopwatch(todayTime)}</p>
            </div>

            <div className="contents-wrap text-center">
                <h3>주간 기록</h3>
                <WeeklyGraph />
                {/* {Object.entries(weeklyData).map(([day, time]) => (
                    <li key={day}>
                        <span>{day}</span>
                        <span>{formatStopwatch(time)}</span>
                    </li>
                ))} */}
            </div>
        </div>
    );
};

export default WeeklyTab;
