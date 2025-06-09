'use client';

import React, { useEffect, useState } from 'react';
import MissionTab from './MissionTab';
import WeeklyTab from './WeeklyTab';
import { v4 as uuidv4 } from 'uuid';
import Editor from './Editor';

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [task, setTask] = useState('');
    const [missions, setMissions] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedMissions = localStorage.getItem('missions');
            if (savedMissions) {
                setMissions(JSON.parse(savedMissions));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('missions', JSON.stringify(missions));
        }
    }, [missions]);

    const addMission = () => {
        const newMission = {
            id: uuidv4(),
            task: task,
            isDone: false,
        };
        setMissions([newMission, ...missions]);
        setTask('');
    };

    const onUpdate = (id) => {
        setMissions(missions.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)));
    };

    const onDelete = (id) => {
        setMissions(missions.filter((item) => item.id !== id));
    };

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
        <div className="sec-g inner rounded-2xl bg-white">
            <div className="flex flex-row">
                {tabMenuArr.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentTab(index)}
                        className={`py-[14px] w-1/2 ${currentTab === index ? 'border-b-2 border-gray-10' : ''}`}
                    >
                        <p className="font-body text-gray-7">{item.name}</p>
                    </button>
                ))}
            </div>
            {/* <div className={`${currentTab === 1 ? 'fixed bottom-[20px] right-[20px] z-20' : 'hidden'}`}>
                <Editor />
            </div> */}
            <div className={`${currentTab === 1 ? 'pb-[60px]' : ''}`}>{tabMenuArr[currentTab].content}</div>
        </div>
    );
};

export default Tabs;
