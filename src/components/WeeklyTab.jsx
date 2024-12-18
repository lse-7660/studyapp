import React from 'react';

import { useStopwatch } from '@/contexts/stopwatchContext';
import WeeklyGraph from './WeeklyGraph';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// WeeklyTab.jsx

const WeeklyTab = () => {
    const { weeklyData, formatStopwatch } = useStopwatch();

    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const currentDay = days[new Date().getDay()];
    const todayTime = weeklyData[currentDay] || 0;

    const chevronStyle = 'text-gray-7';

    return (
        <div className="contents-gap">
            <div className="center gap-8">
                <ChevronLeft strokeWidth={1} className={chevronStyle} />
                {format(new Date(), 'yyyy년 MM월 dd일')}
                <ChevronRight strokeWidth={1} className={chevronStyle} />
            </div>
            <div className="contents-wrap text-center">
                <h3>오늘의 공부 시간</h3>
                <p className="font-display__md">{formatStopwatch(todayTime)}</p>
            </div>

            <div className="contents-wrap text-center">
                <h3>주간 기록</h3>
                <WeeklyGraph />
            </div>
        </div>
    );
};

export default WeeklyTab;
