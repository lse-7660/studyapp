'use client';
import { formatStopwatch, initialState, timerReducer } from '@/states/stopwatchReducer';
import { createContext, useContext, useEffect, useReducer, useState } from 'react';

const LOCAL_STORORAGE_KEY = 'weeklyData';

const StopwatchContext = createContext();

export const StopwatchProvider = ({ children }) => {
    const [state, dispatch] = useReducer(timerReducer, initialState);

    const getWeeklyData = () => {
        const savedTime = localStorage.getItem(LOCAL_STORORAGE_KEY);
        if (savedTime) {
            return JSON.parse(savedTime);
        }
        return {
            일: 0,
            월: 0,
            화: 0,
            수: 0,
            목: 0,
            금: 0,
            토: 0,
        };
    };

    const [weeklyData, setWeeklyData] = useState(getWeeklyData());

    const handleStopSave = (time) => {
        const days = ['일', '월', '화', '수', '목', '금', '토'];
        const currentDay = days[new Date().getDay()];

        const updatedWeeklyData = {
            ...weeklyData,
            [currentDay]: weeklyData[currentDay] + time,
        };
        setWeeklyData(updatedWeeklyData);
        localStorage.setItem(LOCAL_STORORAGE_KEY, JSON.stringify(updatedWeeklyData));
    };

    useEffect(() => {
        const savedTime = localStorage.getItem(LOCAL_STORORAGE_KEY);
        if (savedTime) {
            setWeeklyData(JSON.parse(savedTime));
        }
    }, []);

    useEffect(() => {
        const myStopwatch = state.isRunning ? setInterval(() => dispatch({ type: 'TICK' }), 1000) : null;

        return () => clearInterval(myStopwatch);
    }, [state.isRunning]);

    return (
        <StopwatchContext.Provider value={{ state, dispatch, formatStopwatch, weeklyData, handleStopSave }}>
            {children}
        </StopwatchContext.Provider>
    );
};

export const useStopwatch = () => {
    const context = useContext(StopwatchContext);
    return context;
};
