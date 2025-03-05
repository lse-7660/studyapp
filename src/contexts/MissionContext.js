// MissionContext.js

'use client';

import { missionReducer } from '@/states/missionReducer';
import { initialState } from '@/states/stopwatchReducer';
import React, { createContext, useReducer, useContext, useEffect } from 'react';

const MissionContext = createContext();

export const MissionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(missionReducer, initialState);

    // 로컬스토리지에서 미션 로드
    useEffect(() => {
        if (typeof window !== 'undefined'){const savedMissions = JSON.parse(localStorage.getItem('missions')) || [];
        dispatch({ type: 'LOAD_MISSIONS', payload: savedMissions });}
    }, []);

    // 로컬스토리지에 미션 저장
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('missions', JSON.stringify(state.missions));
        }
    }, [state.missions]);

    return <MissionContext.Provider value={{ state, dispatch }}>{children}</MissionContext.Provider>;
};

export const useMissionContext = () => {
    const context = useContext(MissionContext);
    if (!context) {
        throw new Error('useMissionContext must be used within a MissionProvider');
    }
    return context;
};
