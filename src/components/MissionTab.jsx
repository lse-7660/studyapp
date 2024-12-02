'use client';

import React from 'react';
import MissionList from './MissionList';
import { Plus } from 'lucide-react';

// MissionTab.jsx

const MissionTab = ({ missions, task, setTask, addMission, onUpdate, onDelete }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        addMission();
    };
    return (
        <div className="flex flex-col gap-10">
            <form onSubmit={handleSubmit} className="relative h-12">
                <input
                    type="text"
                    placeholder="오늘은 무엇을 공부할까요?"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="w-full h-full p-3 rounded-md border-b-2 border-gray-100 focus:outline-none focus:border-black"
                />
                <button
                    type="submit"
                    disabled={!task}
                    className={`flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full text-white ${
                        task ? 'bg-black' : 'bg-gray-200'
                    }`}
                >
                    <p className="blind">추가</p>
                    <Plus />
                </button>
            </form>
            <div className="flex flex-col gap-10">
                <MissionList
                    title="오늘의 미션"
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    missions={missions.filter((mission) => mission.isDone === false)}
                    blank={
                        <div className="flex items-center justify-center h-[50px] rounded-md bg-gray-100 ">
                            <p className="text-center text-gray-400">새로운 미션을 추가해 주세요</p>
                        </div>
                    }
                />
                <MissionList
                    title="완료"
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    missions={missions.filter((mission) => mission.isDone === true)}
                />
            </div>
        </div>
    );
};

export default MissionTab;
