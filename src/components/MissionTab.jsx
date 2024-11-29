'use client';

import React from 'react';
import MissionList from './MissionList';

// MissionTab.jsx

const MissionTab = ({ addMission, missions, task, setTask, onUpdate }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        addMission();
    };
    return (
        <div className="flex flex-col gap-10">
            <form onSubmit={handleSubmit} className="flex flex-row gap-2 h-12">
                <input
                    type="text"
                    placeholder="무엇을 공부하나요?"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="w-4/5 h-full p-3 rounded-md border-2 border-gray-200"
                />
                <button
                    type="submit"
                    disabled={!task}
                    className={`w-1/5 h-full text-white rounded-md ${task ? 'bg-black' : 'bg-gray-200'}`}
                >
                    추가
                </button>
            </form>
            <div className="flex flex-col gap-10">
                <MissionList
                    title="오늘의 미션"
                    onUpdate={onUpdate}
                    missions={missions.filter((mission) => mission.isDone === false)}
                />
                <MissionList
                    title="완료"
                    onUpdate={onUpdate}
                    missions={missions.filter((mission) => mission.isDone === true)}
                />
            </div>
        </div>
    );
};

export default MissionTab;
