'use client';

import React, { useEffect, useState } from 'react';
import MissionTab from './MissionTab';
import WeeklyTab from './WeeklyTab';
import { v4 as uuidv4 } from 'uuid';
import Editor from './Editor';
import { useMissionContext } from '@/contexts/MissionContext';

// Tabs.jsx

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const { state, dispatch } = useMissionContext();
    const { missions, newMission } = state;

    // 미션 추가 함수
    const addMission = () => {
        const newMissionObj = {
            id: uuidv4(),
            ...newMission,
            isDone: false,
        };
        dispatchEvent({ type: ' ADD_MISSION', payload: newMissionObj });
    };

    // 탭메뉴 배열
    const tabMenuArr = [
        {
            name: '기록',
            content: <WeeklyTab />,
        },
        {
            name: '미션',
            content: (
                <MissionTab
                    missions={missions}
                    onUpdate={(id) => dispatch({ type: 'TOGGLE_MISSION', payload: id })}
                    onDelete={(id) => dispatch({ type: 'DELETE_MISSION', payload: id })}
                />
            ),
        },
    ];

    return (
        <div className="sec-g inner rounded-2xl bg-white">
            <div className="flex flex-row">
                {tabMenuArr.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentTab(index);
                        }}
                        className={`py-[14px] w-1/2 ${currentTab === index ? 'border-b-2 border-gray-10' : ''}`}
                    >
                        <p className="font-body text-gray-7">{item.name}</p>
                    </button>
                ))}
            </div>
            <div className={`${currentTab === 1 ? 'fixed bottom-[20px] right-[20px] z-20 ' : 'hidden'}`}>
                <Editor
                    newMission={newMission}
                    setNewMission={(mission) => dispatchEvent({ type: 'SET_NEW_MISSION', payload: mission })}
                    addMission={addMission}
                />
            </div>
            <div className={`${currentTab === 1 ? 'pb-[60px]' : ''}`}>{tabMenuArr[currentTab].content}</div>
        </div>
    );
};

export default Tabs;
