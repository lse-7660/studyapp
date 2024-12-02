'use client';

import React, { useEffect, useState } from 'react';
import Section from './layout/Section';
import MissionTab from './MissionTab';
import WeeklyTab from './WeeklyTab';
import { v4 as uuidv4 } from 'uuid';

// Tabs.jsx

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [task, setTask] = useState('');
    const [missions, setMissions] = useState([]);

    useEffect(() => {
        const savedMissions = JSON.parse(localStorage.getItem('missions'));
        setMissions(savedMissions);
    }, []);

    useEffect(() => {
        localStorage.setItem('missions', JSON.stringify(missions));
    }, [missions]);

    // 미션 추가 함수
    const addMission = () => {
        const newMission = {
            id: uuidv4(),
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

    const onDelete = (id) => {
        setMissions(missions.filter((missions) => missions.id !== id));
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
                    addMission={addMission}
                    missions={missions}
                    task={task}
                    setTask={setTask}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
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
                        className={`py-4 w-1/2 ${currentTab === index ? 'border-b-4 border-gray-300' : ''}`}
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
