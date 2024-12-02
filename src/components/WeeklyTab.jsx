import React from 'react';
import Container from './layout/Container';
import { useStopwatch } from '@/contexts/stopwatchContext';

// WeeklyTab.jsx

const WeeklyTab = () => {
    const { weeklyData, formatStopwatch } = useStopwatch();

    return (
        <div>
            <Container title="오늘의 공부 시간">
                {Object.entries(weeklyData).map(([day, time]) => (
                    <li key={day}>
                        <span>{day}</span>
                        <span>{formatStopwatch(time)}</span>
                    </li>
                ))}
            </Container>
            <Container title="주간 기록"></Container>
        </div>
    );
};

export default WeeklyTab;
