'use client';

import React, { useState } from 'react';
import Section from './layout/Section';
import WeeklyGraph from './WeeklyGraph';
import MissionTab from './MissionTab';
import { mockupMission } from '@/data/mockupMission';

// Tabs.jsx

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [task, setTask] = useState('');
    const [missions, setMissions] = useState(mockupMission);

    // 미션 추가 함수
    const addMission = () => {
        const newMission = {
            id: missions.length + 1,
            task: task,
            isDone: false,
        };
        setMissions([newMission, ...missions]);
        setTask('');
    };

    // 체크박스 완료 표시
    const onUpdate = (id) => {
        setMissions(missions.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)));
    };

    // 탭메뉴 배열
    const tabMenuArr = [
        {
            name: '기록',
            content: <WeeklyGraph />,
        },
        {
            name: '미션',
            content: (
                <MissionTab
                    addMission={addMission}
                    missions={missions}
                    task={task}
                    setTask={setTask}
                    onUpdate={onUpdate}
                />
            ),
        },
    ];

    return (
        <Section>
            <div className="flex flex-row gap-5">
                {tabMenuArr.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentTab(index);
                        }}
                        className={`py-2 w-1/2 ${currentTab === index ? 'border-b-4' : ''}`}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            <div className="py-10">{tabMenuArr[currentTab].content}</div>
        </Section>
    );
};

export default Tabs;
