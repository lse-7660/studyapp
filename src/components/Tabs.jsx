// Tabs.jsx

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

    const [isModalOpen, setIsModalOpen] = useState(false);

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
                    setIsModalOpen={setIsModalOpen}
                />
            ),
        },
    ];

    return (
        <div className={`relative z-20 sec-g inner rounded-2xl bg-white ${currentTab === 1 ? 'min-h-screen' : ''}`}>
            <div className="flex flex-row">
                {tabMenuArr.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentTab(index);
                        }}
                        className={`py-[14px] w-1/2 ${currentTab === index ? 'border-b-2 border-gray-10' : ''}`}
                    >
                        <p
                            className={`font-body  ${
                                currentTab === index ? 'text-gray-10 font-medium' : 'text-gray-7'
                            }`}
                        >
                            {item.name}
                        </p>
                    </button>
                ))}
            </div>

            <div className={`${currentTab === 1 ? 'pb-[60px]' : ''}`}>{tabMenuArr[currentTab].content}</div>
            <aside
                className={`${
                    currentTab === 1 ? 'fixed inset-0 max-w-[600px] mx-auto z-20 pointer-events-none ' : 'hidden'
                }`}
            >
                <div className="pointer-events-auto">
                    <Editor
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        newMission={newMission}
                        setNewMission={(mission) => dispatchEvent({ type: 'SET_NEW_MISSION', payload: mission })}
                        addMission={addMission}
                    />
                </div>
            </aside>
        </div>
    );
};

export default Tabs;
